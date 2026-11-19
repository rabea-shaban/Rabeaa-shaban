import { NextResponse } from "next/server";
import { z } from "zod";
import { CHATBOT_CONFIG } from "@/lib/rabea-ai/chatbot-config";
import { serializedKnowledgeBase } from "@/lib/rabea-ai/knowledge";
import { formatRelevantFaq, retrieveRelevantFaq } from "@/lib/rabea-ai/faq-retrieval";
import { buildSystemPrompt } from "@/lib/rabea-ai/prompts/system-prompt";
import { streamAssistantReply } from "@/lib/rabea-ai/provider";
import { checkRateLimit } from "@/lib/rabea-ai/rate-limit";

export const runtime = "nodejs";
export const maxDuration = 30;

const requestSchema = z.object({
  conversationId: z.string().uuid(),
  messages: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().trim().min(1).max(CHATBOT_CONFIG.maxMessageLength),
  }).strict()).min(1).max(CHATBOT_CONFIG.maxHistoryMessages),
}).strict().refine((body) => body.messages.at(-1)?.role === "user", {
  message: "The most recent message must come from the visitor.",
});

const encoder = new TextEncoder();
const sse = (payload) => `data: ${JSON.stringify(payload)}\n\n`;

function providerDebugInfo(error) {
  const value = error && typeof error === "object" ? error : {};
  const cause = value.cause && typeof value.cause === "object" ? value.cause : {};
  return {
    name: typeof value.name === "string" ? value.name : "UnknownError",
    status: typeof value.status === "number" ? value.status : undefined,
    code: typeof value.code === "string"
      ? value.code
      : typeof cause.code === "string" ? cause.code : undefined,
  };
}

async function readLimitedBody(request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > CHATBOT_CONFIG.maxRequestBytes) return null;
  if (!request.body) return null;

  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > CHATBOT_CONFIG.maxRequestBytes) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch {
    return undefined;
  }
}

export async function POST(request) {
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin) {
    try {
      if (new URL(requestOrigin).origin !== new URL(request.url).origin) {
        return NextResponse.json({ error: "origin_not_allowed" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "origin_not_allowed" }, { status: 403 });
    }
  }
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return NextResponse.json({ error: "origin_not_allowed" }, { status: 403 });
  }

  const body = await readLimitedBody(request);
  if (body === null) return NextResponse.json({ error: "request_too_large" }, { status: 413 });
  if (body === undefined) return NextResponse.json({ error: "invalid_json" }, { status: 400 });

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: "chat_unavailable" }, { status: 503 });
  }

  const ip = request.headers.get("x-real-ip")
    || request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || (process.env.NODE_ENV !== "production" ? "local-development" : undefined);
  if (!ip) return NextResponse.json({ error: "chat_unavailable" }, { status: 503 });

  try {
    const allowed = await checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "rate_limit_exceeded" },
        { status: 429, headers: { "Retry-After": "3600" } },
      );
    }
  } catch {
    return NextResponse.json({ error: "chat_unavailable" }, { status: 503 });
  }

  const conversationId = parsed.data.conversationId;
  const messages = parsed.data.messages.slice(-CHATBOT_CONFIG.maxHistoryMessages);
  const retrievedFaq = retrieveRelevantFaq(messages.at(-1).content);
  const supplementalKnowledge = formatRelevantFaq(retrievedFaq);

  let providerStream;
  try {
    providerStream = await streamAssistantReply(
      buildSystemPrompt(serializedKnowledgeBase, supplementalKnowledge),
      messages,
      request.signal,
    );
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Rabea AI] Provider request failed", providerDebugInfo(error));
    }
    return NextResponse.json({
      error: "provider_unavailable",
      ...(process.env.NODE_ENV !== "production" ? { debug: providerDebugInfo(error) } : {}),
    }, { status: 502 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      controller.enqueue(encoder.encode(sse({ type: "start", conversationId })));
      try {
        for await (const chunk of providerStream) {
          if (chunk.text) {
            controller.enqueue(encoder.encode(sse({ type: "delta", text: chunk.text })));
          }
        }
        controller.enqueue(encoder.encode(sse({ type: "done" })));
        controller.close();
      } catch {
        try {
          controller.enqueue(encoder.encode(sse({ type: "error" })));
          controller.close();
        } catch {
          // The visitor may have closed the chat during generation.
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
