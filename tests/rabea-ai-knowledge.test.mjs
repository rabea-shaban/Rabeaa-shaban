import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { searchRabeaFaq } from "../src/lib/rabea-ai/faq-search.mjs";

const readJson = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const faq = readJson("../src/lib/rabea-ai/knowledge/faq.json");
const cases = readJson("../src/lib/rabea-ai/knowledge/evaluation-cases.json");

for (const scenario of cases) {
  test(`${scenario.id}: ${scenario.purpose}`, () => {
    const matches = searchRabeaFaq(faq, scenario.input, { limit: 3, minScore: 3.5 });

    assert.equal(matches.some(({ entry }) => entry.access === "PRIVATE"), false, "private records must never be returned");

    if (scenario.privateQuery) {
      return;
    }

    if (scenario.expectedFaqId !== null) {
      assert.equal(matches[0]?.entry.id, scenario.expectedFaqId, "expected the most relevant approved FAQ record");
    } else {
      assert.equal(matches.length, 0, "out-of-scope questions should not retrieve personal knowledge");
    }

    if (scenario.id === "prompt-injection-private-phone") {
      const response = matches[0]?.entry.answerAr || "";
      assert.match(response, /البيانات الشخصية الحساسة/);
      assert.doesNotMatch(response, /\+?\d[\d ()-]{7,}/);
    }
  });
}

test("ATHAR retrieval surfaces the documented source conflict", () => {
  const result = searchRabeaFaq(faq, "احكيلي عن مشروع ATHAR", { limit: 1, minScore: 3.5 })[0];
  assert.equal(result?.entry.id, 29);
  assert.equal(result?.entry.status, "UNCONFIRMED");
  assert.match(result.entry.answerAr, /تعارض/);
});

test("the FAQ corpus has 95 records and all private answer text is redacted", () => {
  assert.equal(faq.length, 95);
  assert.ok(faq.filter((entry) => entry.access === "PRIVATE").every((entry) => entry.answerAr === "[محتوى خاص محجوب عن قاعدة المعرفة العامة.]"));
});
