export const CHATBOT_CONFIG = {
  maxMessageLength: 1_200,
  maxHistoryMessages: 10,
  maxRequestBytes: 52_000,
  maxOutputTokens: 700,
  requestTimeoutMs: 12_000,
  rateLimit: { requests: 12, window: "1 h" },
  model: process.env.GEMINI_MODEL || "gemini-flash-latest",
  fallbackModel: process.env.GEMINI_FALLBACK_MODEL || "gemini-3.5-flash-lite",
} as const;
