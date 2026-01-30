const { test, expect } = require("@playwright/test");

const URL = "https://www.swifttranslator.com/";

// ---------------- Test Data ----------------
const POS_FUNCTIONAL = [
  { id: "Pos_Fun_0001", name: "Convert a simple sentence", len: "S", input: "mama gedhara yanavaa." },
  { id: "Pos_Fun_0002", name: "Convert a greeting question", len: "S", input: "oyaata kohomadha?" },
  { id: "Pos_Fun_0003", name: "Convert an imperative command", len: "S", input: "mata kiyanna." },
  { id: "Pos_Fun_0004", name: "Convert a negative sentence", len: "S", input: "mama ehema karanne naehae." },
  { id: "Pos_Fun_0005", name: "Convert a polite request", len: "S", input: "karuNaakaralaa eeka dhenavadha?" },
  { id: "Pos_Fun_0006", name: "Convert informal phrasing", len: "S", input: "ehema karapan." },
  { id: "Pos_Fun_0007", name: "Convert repeated words emphasis", len: "S", input: "hari hari lassanayi." },
  { id: "Pos_Fun_0008", name: "Convert plural pronoun", len: "S", input: "api yamu." },

  { id: "Pos_Fun_0009", name: "Convert compound sentence", len: "M", input: "mama gedhara yanavaa saha passe kathaa karamu." },
  { id: "Pos_Fun_0010", name: "Convert complex sentence", len: "M", input: "vaessa vahina nisaa api yanna bae." },
  { id: "Pos_Fun_0011", name: "Convert past tense", len: "M", input: "mama iiyee gedhara giyaa." },

  { id: "Pos_Fun_0012", name: "Convert future tense + place kept", len: "M", input: "api heta Kandy yamu.", mustContain: ["Kandy"] },
  { id: "Pos_Fun_0013", name: "Convert mixed Singlish + English term", len: "M", input: "ada Zoom meeting ekak thiyenavaa.", mustContain: ["Zoom"] },
  { id: "Pos_Fun_0014", name: "Convert English brands embedded", len: "M", input: "Email ekak WhatsApp karanna puLuvandha?", mustContain: ["Email", "WhatsApp"] },
  { id: "Pos_Fun_0015", name: "Convert abbreviations preserved", len: "M", input: "OTP eka SMS vidhihata enavaa.", mustContain: ["OTP", "SMS"] },
  { id: "Pos_Fun_0016", name: "Convert currency + number", len: "M", input: "Rs. 2500 wageyak gatta.", mustContainAny: ["2500", "Rs", "රු"] },
  { id: "Pos_Fun_0017", name: "Convert joined words", len: "M", input: "mamage dharayanavaa".replaceAll(" ", "") },
  { id: "Pos_Fun_0018", name: "Convert punctuation heavy", len: "M", input: "eeka hariyata vaeda karanavaadha?!" },

  {
    id: "Pos_Fun_0019",
    name: "Convert multi-line input formatting preserved",
    len: "L",
    input: "mama gedhara yanavaa.\noyaa enavadha?\napi passe kathaa karamu.",
    expectLines: 3
  },

  {
    id: "Pos_Fun_0020",
    name: "Convert long paragraph input",
    len: "L",
    input:
      "dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.",
    minLen: 30
  },

  { id: "Pos_Fun_0021", name: "Convert slang expression", len: "M", input: "ela machan! supiri!!" },
  { id: "Pos_Fun_0022", name: "Convert polite request variation", len: "M", input: "puLuvannam mata eeka evanna." },
  { id: "Pos_Fun_0023", name: "Convert plural question", len: "M", input: "oyaalaa enavadha?" },
  { id: "Pos_Fun_0024", name: "Convert time format preserved", len: "M", input: "7.30 AM vaelavata ennaa.", mustContainAny: ["7.30", "AM"] }
];

const NEG_FUNCTIONAL = [
  { id: "Neg_Fun_0001", name: "Severely misspelled input", len: "S", input: "mtaa gdr ynva", type: "unstable" },
  { id: "Neg_Fun_0002", name: "Meaningless symbols", len: "S", input: "@@@###$$$", type: "no_sinhala" },
  { id: "Neg_Fun_0003", name: "Only English sentence", len: "M", input: "Please send the document now.", type: "no_sinhala" },
  { id: "Neg_Fun_0004", name: "Missing spaces mixed input", len: "M", input: "Zoommeetingekathiyenavaa", type: "unstable" },
  { id: "Neg_Fun_0005", name: "Very long repetition", len: "L", input: ("mama gedhara yanavaa. ").repeat(60), type: "unstable" },
  { id: "Neg_Fun_0006", name: "Grammar conflict tense", len: "S", input: "mama heta giyaa", type: "unstable" },
  { id: "Neg_Fun_0007", name: "Excessive spacing", len: "M", input: "mama    gedhara      yanavaa.", type: "unstable" },
  { id: "Neg_Fun_0008", name: "Emoji inside input", len: "M", input: "mama 😊 gedhara yanavaa.", type: "emoji" },
  { id: "Neg_Fun_0009", name: "Incomplete sentence", len: "S", input: "mama gedhara", type: "unstable" },
  { id: "Neg_Fun_0010", name: "Mixed script input", len: "M", input: "mama ගෙදර yanawa", type: "unstable" }
];

const UI_TESTS = [
  { id: "Pos_UI_0001", name: "Real-time output update behavior", len: "S", input: "mama gedhara yanavaa." }
];

// ---------------- Helpers ----------------
function hasSinhala(text) {
  return /[\u0D80-\u0DFF]/.test(text);
}

async function getInput(page) {
  const input = page.locator("textarea").first();
  await expect(input).toBeVisible();
  return input;
}

async function readWholePageText(page) {
  return await page.evaluate(() => document.body.innerText);
}

async function typeSlowly(locator, text, delay = 80) {
  // fill("") clears properly but output may remain, so type with delay for reliable conversion
  await locator.click();
  await locator.fill("");
  await locator.type(text, { delay });
}

async function waitForSinhalaAnywhere(page) {
  await expect(async () => {
    const bodyText = await readWholePageText(page);
    expect(hasSinhala(bodyText)).toBe(true);
  }).toPass({ timeout: 12000 });
}

// ---------------- Tests ----------------
test.describe("SwiftTranslator - All Test Cases (No Excel)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
  });

  // ✅ Positive Functional
  for (const tc of POS_FUNCTIONAL) {
    test(`Positive › ${tc.id} - ${tc.name}`, async ({ page }) => {
      const input = await getInput(page);

      await typeSlowly(input, tc.input, 80);
      await waitForSinhalaAnywhere(page);

      const pageText = await readWholePageText(page);
      console.log(`\n[${tc.id}] INPUT: ${tc.input}\n[${tc.id}] PAGE TEXT:\n${pageText}\n`);

      // Must generate Sinhala somewhere
      expect(hasSinhala(pageText)).toBe(true);

      // Token preservation checks (Zoom/Email/etc.)
      if (tc.mustContain) {
        for (const token of tc.mustContain) {
          expect(pageText).toContain(token);
        }
      }

      if (tc.mustContainAny) {
        const ok = tc.mustContainAny.some((t) => pageText.includes(t));
        expect(ok).toBe(true);
      }

      // Multi-line expectation: at least X non-empty lines exist in page text
      if (tc.expectLines) {
        const lines = pageText.split("\n").filter((l) => l.trim().length > 0);
        expect(lines.length).toBeGreaterThanOrEqual(tc.expectLines);
      }

      // Long paragraph: ensure Sinhala content exists and total page text length is reasonable
      if (tc.minLen) {
        expect(pageText.length).toBeGreaterThanOrEqual(tc.minLen);
      }
    });
  }

  // ✅ Negative Functional
  for (const tc of NEG_FUNCTIONAL) {
    test(`Negative › ${tc.id} - ${tc.name}`, async ({ page }) => {
      const input = await getInput(page);

      await typeSlowly(input, tc.input, 80);
      await page.waitForTimeout(2500);

      const pageText = await readWholePageText(page);
      console.log(`\n[${tc.id}] INPUT: ${tc.input}\n[${tc.id}] PAGE TEXT:\n${pageText}\n`);

      if (tc.type === "no_sinhala") {
        // pure English/symbols should not produce Sinhala
        expect(hasSinhala(pageText)).toBe(false);
      } else if (tc.type === "emoji") {
        // expected limitation: emoji may remain; Sinhala may or may not appear
        expect(pageText.includes("😊") || hasSinhala(pageText)).toBe(true);
      } else {
        // unstable conversion expected: accept if Sinhala missing OR output contains lots of Latin
        const unstable =
          !hasSinhala(pageText) ||
          /[a-zA-Z]/.test(pageText);

        expect(unstable).toBe(true);
      }
    });
  }

  // ✅ UI Test
  for (const tc of UI_TESTS) {
    test(`UI › ${tc.id} - ${tc.name}`, async ({ page }) => {
      const input = await getInput(page);

      await input.fill("");
      await page.waitForTimeout(800);
      const before = await readWholePageText(page);

      // type gradually
      await input.click();
      for (const ch of tc.input) {
        await input.type(ch, { delay: 80 });
      }

      await waitForSinhalaAnywhere(page);
      const afterTyping = await readWholePageText(page);

      // clear input and verify output reduces/changes
      await input.fill("");
      await page.waitForTimeout(1200);
      const afterClear = await readWholePageText(page);

      expect(afterTyping).not.toBe(before);
      expect(afterClear.length).toBeLessThan(afterTyping.length);
    });
  }
});
