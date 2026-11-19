import "server-only";
import { createHash } from "node:crypto";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { CHATBOT_CONFIG } from "./chatbot-config";

let limiter: Ratelimit | undefined;

function getLimiter() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return undefined;
  limiter ??= new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(CHATBOT_CONFIG.rateLimit.requests, CHATBOT_CONFIG.rateLimit.window),
    prefix: "rabea-ai",
    analytics: false,
  });
  return limiter;
}

export async function checkRateLimit(ip: string) {
  const instance = getLimiter();
  if (!instance) return process.env.NODE_ENV !== "production";
  const hashedIp = createHash("sha256").update(ip).digest("hex");
  const result = await instance.limit(hashedIp);
  return result.success;
}
