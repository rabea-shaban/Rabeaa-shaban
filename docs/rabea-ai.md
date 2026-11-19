# Rabea AI

Rabea AI is a bilingual, portfolio-scoped assistant. Its launcher is part of the existing `SiteChrome`; the larger chat window is loaded only after a visitor opens it. The App Router endpoint streams Gemini text over server-sent events. Conversation content is not persisted by this application.

## Architecture

- `src/components/rabea-ai/` contains the launcher and accessible responsive chat window. It follows the existing theme CSS variables, reads the current language setting, and uses the site's RTL direction for Arabic.
- `src/app/api/rabea-ai/chat/route.js` validates same-origin requests, caps request bytes and message sizes, validates roles/history with Zod, applies rate limiting, and streams sanitized status/delta events.
- `src/lib/rabea-ai/provider.ts` is the provider boundary. It uses Google's official `@google/genai` SDK, the `gemini-flash-latest` model alias, a `gemini-3.5-flash-lite` fallback for API 404/429/5xx and connection-timeout errors, a 12-second timeout per model attempt, and a configurable output-token limit.
- `src/lib/rabea-ai/knowledge/` keeps personal details, education, skills, experience, certifications, projects, and contact details separate. Skills, work history, projects, and certificates are derived from the portfolio's existing `src/Data` files to reduce duplicate sources of truth.
- `src/lib/rabea-ai/quick-answers.ts` contains detailed bilingual answers built from the approved knowledge base, Arabic and English topic aliases, and project-specific responses generated from portfolio records. Known questions return immediately in the browser without an API request; unmatched questions continue to Gemini and stream as they are generated.
- `src/lib/rabea-ai/knowledge/faq.json` stores the owner-provided 95-question corpus with per-record source, status, access, and topic tags. `metadata.json` records source precedence, privacy rules, and known conflicts. `faq-search.mjs` performs lightweight Arabic/English topic and keyword retrieval without a vector database. Exact Arabic FAQ questions return locally; unmatched questions send only the top three non-private FAQ entries to the server prompt as supplemental context.
- `src/lib/rabea-ai/knowledge/evaluation-cases.json` holds 100 Arabic, English, privacy, prompt-injection, and out-of-scope evaluation scenarios. Run them with `npm run test:rabea-ai`.
- `src/lib/rabea-ai/prompts/system-prompt.ts` defines scope, language, and accuracy rules.

The browser stores the current conversation only in component state. Clearing the conversation discards it and generates a new conversation ID. The ID is not used as a visitor identifier or persisted. The rate-limit service receives a one-way SHA-256 hash of the request IP as its key; it does not receive the conversation text.

## Updating the knowledge base

Update the existing `src/Data/projects.js`, `src/Data/skills.js`, `src/Data/experience.js`, and `src/Data/certificates.js` first. The chatbot projects only the public text fields and HTTPS links from those files. For education, contact links, and personal summaries, edit the corresponding module in `src/lib/rabea-ai/knowledge/`.

Add only documented facts. `availability` intentionally remains “Not confirmed in the portfolio.” The owner corrected the degree to Business Information Systems (BIS), so the chatbot uses BIS even though older portfolio pages and the 2025 CV use MIS. The institution's official English name still needs certificate review. The site lists AWS Certified Cloud Practitioner. A separate record marks AWS Certified Developer – Associate (DVA-C02) completed, but has no credential URL or exact issue date; it is kept out of visitor answers until verified. GymVIP, ImpersonaGuard, Ecomarcess, E-Learning Dashboard, and other supplementary project records are not in the repository's reviewed project data, so their details remain in the review backlog rather than visitor answers.

The repository also contains a one-page CV created in May 2025. It describes Rabea as a Front-End Developer and lists some older training and skills; the current portfolio describes him as a Full Stack Software Engineer. The chatbot follows the current portfolio data and omits CV-only details that are not also reflected in current site content. The CV's phone number is not part of the chatbot knowledge base. The skills list is an inventory and does not imply equal proficiency. The attached ATHAR record describes a mobile app, while the reviewed portfolio describes an Arabic-first Next.js digital platform; the chatbot uses the portfolio entry until that difference is reconciled.

The Q&A corpus is owner-supplied and has not been independently verified. `PUBLIC` records can be used as answers subject to their `status`: `USER_REPORTED` details are attributed to the supplied profile, `INFERRED` details must be phrased as estimates, and `UNCONFIRMED` or `HISTORICAL` information must retain its caveat. `PROFESSIONAL` entries are only used in a professional context. `PRIVATE` entries are omitted from retrieval and their answer text is redacted in the file. Do not restore private content. The ATHAR disagreement is explicitly marked `UNCONFIRMED`; do not combine its descriptions. Availability and current job preferences are not confirmed.

To add or correct an FAQ, edit the matching item in `knowledge/faq.json`, preserve its numeric ID, set an accurate `status` and `access`, and add relevant English or Arabic topic tags. Keep private information out of the file entirely. If a fact is now confirmed by the portfolio or a certificate, update the primary portfolio source as well, then adjust `knowledge/metadata.json` and the evaluation scenarios. Run `npm run test:rabea-ai` after changes.

## Environment variables

Copy `.env.example` to `.env.local` for local development and set:

| Variable | Required | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes | Gemini API credential used only by the server. Create one in [Google AI Studio](https://aistudio.google.com/apikey). |
| `GEMINI_MODEL` | No | Model identifier; defaults to Google's `gemini-flash-latest` alias. |
| `GEMINI_FALLBACK_MODEL` | No | Backup model for temporary model/API failures; defaults to `gemini-3.5-flash-lite`. |
| `UPSTASH_REDIS_REST_URL` | Production | Upstash Redis REST URL for shared sliding-window limits. |
| `UPSTASH_REDIS_REST_TOKEN` | Production | Upstash Redis REST token. |

The production route fails closed if Gemini or shared rate-limit configuration is missing or unavailable. Local development can run without Upstash, but then no distributed limit is applied. The configured limit is 12 requests per hashed IP per hour. No API keys belong in `NEXT_PUBLIC_*` variables.

## Run and deploy

1. Install dependencies with `npm install`.
2. Create a Gemini API key in Google AI Studio and configure `GEMINI_API_KEY` in `.env.local` (and optionally `GEMINI_MODEL`).
3. Run `npm run dev` and open the portfolio. Common profile, skills, project, education, certification, contact, and career questions are answered locally; new or unsupported phrasings continue to Gemini.
4. For Vercel, add all four variables in the project settings for Production and Preview as appropriate, provision an Upstash Redis database, then redeploy.
5. Monitor usage and quotas in Google AI Studio / Google AI for Developers. Gemini responses have a 700-token output cap and each request is capped at 10 recent turns. Local FAQ responses use no provider request or tokens.

The code uses the official [Google GenAI JavaScript SDK](https://googleapis.github.io/js-genai/) and Gemini streaming generation. By default it requests Google's `gemini-flash-latest` alias and falls back to `gemini-3.5-flash-lite` when the API returns a model-not-found, quota, or server error. Both names can be changed with `GEMINI_MODEL` and `GEMINI_FALLBACK_MODEL`. A live check found temporary high demand on the latest alias, which is why a tested fallback is configured. Check the [current Gemini API pricing and data-use terms](https://ai.google.dev/gemini-api/docs/pricing) for model access, quotas, regional availability, and free-tier eligibility. Free-tier data handling differs from paid service: Google may use free-tier prompts and responses to improve its products. Do not send private or sensitive visitor information to this chatbot, and review Google's current terms before production use.

## Security and privacy

- Keep the Gemini and Upstash credentials server-side.
- Rate limiting is shared through Upstash in production; the route does not rely on an in-memory serverless counter.
- Requests have a 52 KB body cap, a 1,200-character per-message limit, a 10-message context cap, and a 12-second timeout for each provider attempt (up to two attempts).
- The route denies mismatched `Origin` headers and `Sec-Fetch-Site: cross-site` requests.
- Model output is rendered as text with a small safe Markdown subset. Links are only clickable for HTTPS or mailto URLs, without HTML injection.
- No chat transcript is stored by this application. Provider-side handling follows the Gemini API plan and Google's current terms; the free tier may use submitted content to improve Google products. Review Google's current [pricing and data-use terms](https://ai.google.dev/gemini-api/docs/pricing) before production use.
- The client address is hashed before being passed as the Upstash rate-limit key. Upstash still stores the hash and request counter until the configured window expires.
