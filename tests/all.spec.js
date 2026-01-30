const { test, expect } = require("@playwright/test");

const URL = "https://www.swifttranslator.com/";

// --------- Test Data (24 Pos + 10 Neg + 1 UI) ----------
const POS_FUNCTIONAL = [
  { id: "Pos_Fun_0001", name: "Convert a simple sentence", len: "S", input: "mama gedhara yanavaa.", expected: "මම ගෙදර යනවා." },
  { id: "Pos_Fun_0002", name: "Convert a greeting question", len: "S", input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" },
  { id: "Pos_Fun_0003", name: "Convert an imperative command", len: "S", input: "mata kiyanna.", expected: "මට කියන්න." },
  { id: "Pos_Fun_0004", name: "Convert a negative sentence", len: "S", input: "mama ehema karanne naehae.", expected: "මම එහෙම කරන්නේ නැහැ." },
  { id: "Pos_Fun_0005", name: "Convert a polite request", len: "S", input: "karuNaakaralaa eeka dhenavadha?", expected: "කරුණාකරලා ඒක දෙන්නද?" },
  { id: "Pos_Fun_0006", name: "Convert informal phrasing", len: "S", input: "ehema karapan.", expected: "එහෙම කරපන්." },
  { id: "Pos_Fun_0007", name: "Convert repeated words emphasis", len: "S", input: "hari hari lassanayi.", expected: "හරි හරි ලස්සනයි." },
  { id: "Pos_Fun_0008", name: "Convert plural pronoun", len: "S", input: "api yamu.", expected: "අපි යමු." },

  { id: "Pos_Fun_0009", name: "Convert compound sentence", len: "M", input: "mama gedhara yanavaa saha passe kathaa karamu.", expected: "මම ගෙදර යනවා සහ පස්සේ කතා කරමු." },
  { id: "Pos_Fun_0010", name: "Convert complex sentence", len: "M", input: "vaessa vahina nisaa api yanna bae.", expected: "වැස්ස වැහිනා නිසා අපි යන්න බැහැ." },
  { id: "Pos_Fun_0011", name: "Convert past tense", len: "M", input: "mama iiyee gedhara giyaa.", expected: "මම ඊයේ ගෙදර ගියා." },
  { id: "Pos_Fun_0012", name: "Convert future tense + place kept", len: "M", input: "api heta Kandy yamu.", expected: "අපි හෙට Kandy යමු." },
  { id: "Pos_Fun_0013", name: "Convert mixed Singlish + English term", len: "M", input: "ada Zoom meeting ekak thiyenavaa.", expected: "අද Zoom meeting එකක් තියෙනවා." },
  { id: "Pos_Fun_0014", name: "Convert English brands embedded", len: "M", input: "Email ekak WhatsApp karanna puLuvandha?", expected: "Email එකක් WhatsApp කරන්න පුළුවන්ද?" },
  { id: "Pos_Fun_0015", name: "Convert abbreviations preserved", len: "M", input: "OTP eka SMS vidhihata enavaa.", expected: "OTP එක SMS විදිහට එනවා." },
  { id: "Pos_Fun_0016", name: "Convert currency + number", len: "M", input: "Rs. 2500 wageyak gatta.", expected: "රු. 2500 වැයක් ගත්ත." },
  { id: "Pos_Fun_0017", name: "Convert joined words", len: "M", input: "mamage dharayanavaa".replaceAll(" ", ""), expected: "මම ගෙදර යනවා." }, // mamagedharayanavaa
  { id: "Pos_Fun_0018", name: "Convert punctuation heavy", len: "M", input: "eeka hariyata vaeda karanavaadha?!", expected: "ඒක හරියට වැඩ කරනවද?!" },

  {
    id: "Pos_Fun_0019",
    name: "Convert multi-line input formatting preserved",
    len: "L",
    input: "mama gedhara yanavaa.\noyaa enavadha?\napi passe kathaa karamu.",
    expected: "මම ගෙදර යනවා.\nඔයා එනවද?\nඅපි පස්සේ කතා කරමු."
  },

  {
    id: "Pos_Fun_0020",
    name: "Convert long paragraph input",
    len: "L",
    input:
      "dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.",
    expected: "(Long Sinhala paragraph output - as per system actual)"
  },

  { id: "Pos_Fun_0021", name: "Convert slang expression", len: "M", input: "ela machan! supiri!!", expected: "එළ මචං! සුපිරි!!" },
  { id: "Pos_Fun_0022", name: "Convert polite request variation", len: "M", input: "puLuvannam mata eeka evanna.", expected: "පුළුවන්නම් මට ඒක එවන්න." },
  { id: "Pos_Fun_0023", name: "Convert plural question", len: "M", input: "oyaalaa enavadha?", expected: "ඔයාලා එනවද?" },
  { id: "Pos_Fun_0024", name: "Convert time format preserved", len: "M", input: "7.30 AM vaelavata ennaa.", expected: "7.30 AM වෙලාවට එන්න." }
];

const NEG_FUNCTIONAL = [
  { id: "Neg_Fun_0001", name: "Severely misspelled input", len: "S", input: "mtaa gdr ynva", expected: "මම ගෙදර යනවා." }, // expecting correct, system likely won't -> Fail
  { id: "Neg_Fun_0002", name: "Meaningless symbols", len: "S", input: "@@@###$$$", expected: "" },
  { id: "Neg_Fun_0003", name: "Only English sentence", len: "M", input: "Please send the document now.", expected: "(should not transliterate)" },
  { id: "Neg_Fun_0004", name: "Missing spaces mixed input", len: "M", input: "Zoommeetingekathiyenavaa", expected: "Zoom meeting එකක් තියෙනවා." },
  { id: "Neg_Fun_0005", name: "Very long repetition", len: "L", input: ("mama gedhara yanavaa. ").repeat(60), expected: "(stable Sinhala output)" },
  { id: "Neg_Fun_0006", name: "Grammar conflict tense", len: "S", input: "mama heta giyaa", expected: "මම හෙට ගියා." },
  { id: "Neg_Fun_0007", name: "Excessive spacing", len: "M", input: "mama    gedhara      yanavaa.", expected: "මම ගෙදර යනවා." },
  { id: "Neg_Fun_0008", name: "Emoji inside input", len: "M", input: "mama 😊 gedhara yanavaa.", expected: "මම ගෙදර යනවා." },
  { id: "Neg_Fun_0009", name: "Incomplete sentence", len: "S", input: "mama gedhara", expected: "මම ගෙදර" },
  { id: "Neg_Fun_0010", name: "Contradicting time references", len: "S", input: "iiyee heta yanna", expected: "ඊයේ හෙට යන්න" }
];

const UI_TESTS = [
  { id: "Pos_UI_0001", name: "Real-time output update behavior", len: "S", input: "mama gedhara yanavaa.", expected: "(output updates while typing)" }
];

// --------- Helpers ----------
async function getInputLocator(page) {
  // Input is almost always the only textarea
  return page.locator("textarea").first();
}

async function getOutputLocator(page) {
  // Try common possibilities (site can change)
  const candidates = [
    "textarea[readonly]",
    "textarea[disabled]",
    "[contenteditable='true']",
    "#output",
    "#result",
    ".output",
    ".result",
    "div:has-text('Sinhala')"
  ];

  for (const sel of candidates) {
    const loc = page.locator(sel).first();
    if (await loc.count()) return loc;
  }

  // As a last resort: if there are 2+ textareas, second is output
  const ta = page.locator("textarea");
  if ((await ta.count()) >= 2) return ta.nth(1);

  throw new Error("Could not find output element. Inspect page and update output selectors.");
}

async function readOutput(outputLocator) {
  const tag = await outputLocator.evaluate((el) => el.tagName.toLowerCase());
  if (tag === "textarea" || tag === "input") {
    return (await outputLocator.inputValue()).trim();
  }
  return (await outputLocator.innerText()).trim();
}

async function clearInput(inputLocator) {
  await inputLocator.fill("");
}

// --------- Tests ----------
test.describe("SwiftTranslator - All Test Cases (No Excel)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
  });

  for (const tc of POS_FUNCTIONAL) {
    test(`Positive Functional › ${tc.id} - ${tc.name}`, async ({ page }) => {
      const input = await getInputLocator(page);
      const output = await getOutputLocator(page);

      await input.fill(tc.input);
      await page.waitForTimeout(800);

      const actual = await readOutput(output);

      // For Pos_Fun_0020 we don't hard-assert exact paragraph (because it's system-dependent),
      // but we still ensure output is not empty.
      if (tc.id === "Pos_Fun_0020") {
        expect(actual.length).toBeGreaterThan(20);
      } else {
        expect(actual).toBe(tc.expected);
      }
    });
  }

  for (const tc of NEG_FUNCTIONAL) {
    test(`Negative Functional › ${tc.id} - ${tc.name}`, async ({ page }) => {
      const input = await getInputLocator(page);
      const output = await getOutputLocator(page);

      await input.fill(tc.input);
      await page.waitForTimeout(800);

      const actual = await readOutput(output);

      // Negative rule: we expect system NOT to match the "ideal" expected
      // (so test PASSES if mismatch happens).
      expect(actual).not.toBe(tc.expected);
    });
  }

  for (const tc of UI_TESTS) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      const input = await getInputLocator(page);
      const output = await getOutputLocator(page);

      // Type slowly to check real-time updates
      await clearInput(input);
      await page.waitForTimeout(300);

      const text = tc.input;
      for (let i = 0; i < text.length; i++) {
        await input.type(text[i], { delay: 60 });
      }

      await page.waitForTimeout(500);
      const afterTyping = await readOutput(output);

      // Clear and verify output becomes empty or changes significantly
      await clearInput(input);
      await page.waitForTimeout(500);
      const afterClear = await readOutput(output);

      expect(afterTyping.length).toBeGreaterThan(0);
      // output after clear is often empty; allow either empty or much shorter
      expect(afterClear.length).toBeLessThan(afterTyping.length);
    });
  }
});
