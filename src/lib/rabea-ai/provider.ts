import "server-only";
import { ApiError, GoogleGenAI } from "@google/genai";
import { CHATBOT_CONFIG } from "./chatbot-config";

export type ChatTurn = { role: "user" | "assistant"; content: string };

function canUseFallback(error: unknown) {
  if (error instanceof ApiError) {
    return error.status === 404 || error.status === 429 || error.status >= 500;
  }

  if (!(error instanceof Error)) return false;
  if (error.name === "AbortError" || error.name === "TimeoutError") return true;
  const providerError = error as Error & { code?: string; cause?: { code?: string } };
  const code = providerError.code ?? providerError.cause?.code;
  return Boolean(
    (code && ["ECONNRESET", "ECONNREFUSED", "EAI_AGAIN", "ENOTFOUND", "ETIMEDOUT"].includes(code))
    || /timeout|timed out|fetch failed|network/i.test(error.message),
  );
}

function providerErrorStatus(error: unknown) {
  return error instanceof ApiError ? error.status : undefined;
}

export async function streamAssistantReply(
  instructions: string,
  messages: ChatTurn[],
  signal?: AbortSignal,
) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("MISSING_API_KEY");

  const client = new GoogleGenAI({
    apiKey,
    httpOptions: {
      timeout: CHATBOT_CONFIG.requestTimeoutMs,
      retryOptions: { attempts: 1 },
    },
  });

  const contents = messages.map(({ role, content }) => ({
      role: role === "assistant" ? "model" : "user",
      parts: [{ text: content }],
    }));
  const config = {
    systemInstruction: instructions,
    maxOutputTokens: CHATBOT_CONFIG.maxOutputTokens,
    temperature: 0.2,
    abortSignal: signal,
  };
  const openStream = (model: string) => client.models.generateContentStream({
    model,
    contents,
    config,
  });

  let initialStream;
  try {
    initialStream = await openStream(CHATBOT_CONFIG.model);
  } catch (error) {
    if (
      signal?.aborted
      || CHATBOT_CONFIG.fallbackModel === CHATBOT_CONFIG.model
      || !canUseFallback(error)
    ) {
      throw error;
    }

    try {
      return await openStream(CHATBOT_CONFIG.fallbackModel);
    } catch (fallbackError) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[Rabea AI] Gemini fallback failed", {
          primaryStatus: providerErrorStatus(error),
          fallbackStatus: providerErrorStatus(fallbackError),
        });
      }
      throw fallbackError;
    }
  }

  return (async function* streamWithFallback() {
    let emittedText = false;
    try {
      for await (const chunk of initialStream) {
        if (chunk.text) emittedText = true;
        yield chunk;
      }
    } catch (error) {
      if (
        emittedText
        || signal?.aborted
        || CHATBOT_CONFIG.fallbackModel === CHATBOT_CONFIG.model
        || !canUseFallback(error)
      ) {
        throw error;
      }

      try {
        const fallbackStream = await openStream(CHATBOT_CONFIG.fallbackModel);
        for await (const chunk of fallbackStream) yield chunk;
      } catch (fallbackError) {
        if (process.env.NODE_ENV !== "production") {
          console.error("[Rabea AI] Gemini stream fallback failed", {
            primaryStatus: providerErrorStatus(error),
            fallbackStatus: providerErrorStatus(fallbackError),
          });
        }
        throw fallbackError;
      }
    }
  })();
}
