import "server-only";
import { createHash } from "node:crypto";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { CHATBOT_CONFIG } from "./chatbot-config";

let limiter: Ratelimit | undefined;

// In-memory sliding window fallback when Upstash Redis is not configured
interface MemoryLimitRecord {
  count: number;
  resetAt: number;
}
const memoryLimits = new Map<string, MemoryLimitRecord>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = Math.max(CHATBOT_CONFIG.rateLimit.requests, 20); // At least 20 requests/hr per IP

function checkMemoryRateLimit(key: string): boolean {
  const now = Date.now();
  const record = memoryLimits.get(key);

  // Periodic cleanup if the map grows
  if (memoryLimits.size > 2000) {
    for (const [k, v] of memoryLimits.entries()) {
      if (now > v.resetAt) memoryLimits.delete(k);
    }
  }

  if (!record || now > record.resetAt) {
    memoryLimits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count += 1;
  return true;
}

function getLimiter() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return undefined;
  try {
    limiter ??= new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(CHATBOT_CONFIG.rateLimit.requests, CHATBOT_CONFIG.rateLimit.window),
      prefix: "rabea-ai",
      analytics: false,
    });
    return limiter;
  } catch (err) {
    console.warn("[Rabea AI] Could not initialize Upstash Redis:", err);
    return undefined;
  }
}

export async function checkRateLimit(ip: string): Promise<boolean> {
  const hashedIp = createHash("sha256").update(ip).digest("hex");
  const instance = getLimiter();

  if (!instance) {
    return checkMemoryRateLimit(hashedIp);
  }

  try {
    const result = await instance.limit(hashedIp);
    return result.success;
  } catch (err) {
    console.warn("[Rabea AI] Upstash rate limit failed, using memory fallback:", err);
    return checkMemoryRateLimit(hashedIp);
  }
}
