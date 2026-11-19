const EN_STOP = new Set(["a", "about", "an", "and", "are", "as", "at", "can", "did", "do", "does", "for", "from", "he", "his", "how", "i", "in", "is", "it", "me", "of", "on", "or", "rabea", "rabea's", "shaban", "tell", "that", "the", "their", "them", "this", "to", "was", "what", "when", "where", "which", "who", "why", "with", "work", "you", "your"]);
const AR_STOP = new Set(["الى", "أنا", "انت", "انتم", "ايه", "ازاي", "عن", "في", "قال", "كان", "ما", "ماذا", "من", "مين", "هل", "هو", "هي", "هذا", "هذه", "ربيع", "شعبان", "عنده", "عند", "على", "كيف", "ممكن", "احكيلي", "حدثني", "كل", "له", "لديه", "بتاعه", "مع", "و"]);

const TOPIC_TERMS = {
  profile: ["profile", "bio", "background", "identity", "نبذة", "تعريف", "خلفية", "شخصية"],
  education: ["education", "degree", "university", "study", "academic", "تعليم", "دراسة", "مؤهل", "جامعة"],
  training: ["training", "course", "diploma", "تدريب", "دورة", "كورسات", "دبلومة"],
  certification: ["certificate", "certification", "aws", "شهادة", "شهادات", "اعتماد"],
  experience: ["experience", "career", "employment", "internship", "job", "خبرة", "وظيفة", "تاريخ مهني"],
  skills: ["skills", "technology", "technologies", "tech stack", "مهارات", "تقنيات", "ستاك"],
  projects: ["project", "projects", "portfolio", "work samples", "مشروع", "مشاريع", "مشروعات", "أعمال"],
  ai: ["artificial intelligence", "generative ai", "llm", "gemini", "ذكاء اصطناعي", "الذكاء الاصطناعي", "جيمناي"],
  architecture: ["architecture", "clean architecture", "system design", "scalable", "بنية", "معمارية", "تصميم الأنظمة"],
  content: ["content creation", "educational content", "خمسة برمجة", "صناعة المحتوى", "محتوى تعليمي"],
  business: ["business", "agency", "digital transformation", "نهج الرقمية", "عمل تجاري", "تحول رقمي"],
  career: ["availability", "remote", "hybrid", "relocation", "hire", "توظيف", "متاح", "عن بعد", "انتقال"],
  contact: ["contact", "email", "linkedin", "github", "reach", "تواصل", "بريد", "لينكد"],
};

const PROJECT_NAMES = [
  "athar", "impersonaguard", "impersona guard", "medimind", "eduSphere", "pharmacy pos", "sy2antek", "ecommerce", "e-commerce", "crime prediction", "agrsup", "tarahoj", "e-learning dashboard", "zein hub", "sanad", "nahj alraqamia", "نهج الرقمية", "خمسة برمجة",
];

function normalize(value) {
  return String(value ?? "")
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function stem(token) {
  if (/^[a-z\d]+$/i.test(token)) return token.length > 4 ? token.replace(/(?:ies|es|s)$/i, (suffix) => suffix === "ies" ? "y" : "") : token;
  if (token.length > 5) token = token.replace(/^(?:وال|بال|كال|فال|لل|ال)/, "");
  if (token.length > 5) token = token.replace(/(?:يات|ات|ون|ين|هما|هم|هن|ها|ه|ية|يه|يه|كم|نا|ي)$/, "");
  return token;
}

function tokens(value) {
  return normalize(value)
    .split(/\s+/)
    .map(stem)
    .filter((token) => token.length > 1 && !EN_STOP.has(token) && !AR_STOP.has(token));
}

function isAboutRabea(query) {
  const normalized = normalize(query);
  const queryTokens = new Set(normalized.split(" "));
  if (["rabea", "شعبان", "ربيع", "his", "he", "him", "you", "your", "هو", "عنده", "لديه", "بتاعه", "انت", "معاك"].some((term) => queryTokens.has(normalize(term)))) return true;
  return PROJECT_NAMES.some((name) => normalized.includes(normalize(name)));
}

function matchedTopics(query) {
  const normalized = normalize(query);
  return new Set(Object.entries(TOPIC_TERMS)
    .filter(([, aliases]) => aliases.some((alias) => normalized.includes(normalize(alias))))
    .map(([topic]) => topic));
}

function scoreEntry(entry, query, queryTokens, queryTopics) {
  const questionTokens = new Set(tokens(entry.questionAr));
  const answerTokens = new Set(tokens(entry.answerAr));
  const categoryTokens = new Set(tokens(`${entry.section} ${(entry.tags || []).join(" ")}`));
  const distinct = [...new Set(queryTokens)];
  const questionHits = distinct.filter((token) => questionTokens.has(token)).length;
  const answerHits = distinct.filter((token) => answerTokens.has(token)).length;
  const categoryHits = distinct.filter((token) => categoryTokens.has(token)).length;
  const tagHits = [...queryTopics].filter((topic) => (entry.tags || []).includes(topic)).length;
  const entityHit = PROJECT_NAMES.some((name) => normalize(query).includes(normalize(name)) && normalize(`${entry.questionAr} ${entry.answerAr}`).includes(normalize(name))) ? 1 : 0;
  const normalizedQuestion = normalize(entry.questionAr);
  const normalizedQuery = normalize(query);
  const directMatch = normalizedQuestion === normalizedQuery || (normalizedQuery.length > 5 && normalizedQuestion.includes(normalizedQuery));
  const coverage = distinct.length ? Math.min(1, (questionHits + categoryHits + answerHits * 0.3) / distinct.length) : 0;
  const score = directMatch ? 100 : questionHits * 5 + categoryHits * 2.5 + answerHits * 0.55 + tagHits * 4 + entityHit * 8;
  return { entry, score, directMatch, coverage, questionHits, tagHits };
}

export function searchRabeaFaq(records, query, { limit = 4, minScore = 3, requireAboutRabea = true } = {}) {
  if (!String(query ?? "").trim()) return [];
  const exactMatches = records
    .filter((entry) => entry.access !== "PRIVATE" && entry.answerAr && normalize(entry.questionAr) === normalize(query))
    .map((entry) => ({ entry, score: 100, directMatch: true, coverage: 1, questionHits: 0, tagHits: 0 }));
  if (exactMatches.length) return exactMatches.slice(0, limit);
  if (requireAboutRabea && !isAboutRabea(query)) return [];
  const queryTokens = tokens(query);
  if (!queryTokens.length) return [];
  const queryTopics = matchedTopics(query);
  return records
    .filter((entry) => entry.access !== "PRIVATE" && entry.answerAr)
    .map((entry) => scoreEntry(entry, query, queryTokens, queryTopics))
    .filter((result) => result.score >= minScore)
    .sort((a, b) => b.score - a.score || a.entry.id - b.entry.id)
    .slice(0, limit);
}
