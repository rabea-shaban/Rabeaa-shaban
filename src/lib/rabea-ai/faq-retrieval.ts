import faqCorpus from "./knowledge/faq.json";
import { searchRabeaFaq } from "./faq-search.mjs";

export function retrieveRelevantFaq(question: string, limit = 3) {
  return searchRabeaFaq(faqCorpus, question, { limit, minScore: 3.5, requireAboutRabea: true });
}

export function getInstantFaqAnswer(question: string) {
  if (!/[\u0600-\u06FF]/.test(question)) return undefined;
  const [best, second] = searchRabeaFaq(faqCorpus, question, { limit: 2, minScore: 8, requireAboutRabea: true });
  if (!best || (!best.directMatch && (best.score < 12 || best.coverage < 0.4 || (second && best.score - second.score < 2)))) return undefined;
  return best.entry.answerAr;
}

export function formatRelevantFaq(matches: ReturnType<typeof retrieveRelevantFaq>) {
  return matches.map(({ entry }) => [
    `FAQ #${entry.id} [status=${entry.status}; access=${entry.access}; source=${entry.source}]`,
    `Question: ${entry.questionAr}`,
    `Answer: ${entry.answerAr}`,
  ].join("\n")).join("\n\n");
}
