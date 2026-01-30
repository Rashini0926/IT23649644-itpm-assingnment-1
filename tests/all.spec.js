const { test, expect } = require('@playwright/test');

/* ================= POSITIVE FUNCTIONAL (24) ================= */

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('suba dawasak!');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0001 ->', result);
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('oyaata kohomada?');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0002 ->', result);
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('mata bath one.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0003 ->', result);
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('karuNaakarala poddak balanna.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0004 ->', result);
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('issarahata yanna.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0005 ->', result);
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('mama ada wada karanawa.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0006 ->', result);
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('mama iiye gedara giya.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0007 ->', result);
});

test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('api heta yamu.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0008 ->', result);
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('mama ehema karanne na.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0009 ->', result);
});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('oyaa enawada?');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0010 ->', result);
});

test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('oyaalaa enawada?');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0011 ->', result);
});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('hari hari, mama balannam.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0012 ->', result);
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('api kaema kanna yanawa saha passe film ekak balamu.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0013 ->', result);
});

test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('oya enawanam mama idala innawa.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0014 ->', result);
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('puLuwannam mata eeka yavanna, mama balannam.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0015 ->', result);
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('Colombo yanna hadanne traffic nisa late wenna puluwan.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0016 ->', result);
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('WiFi password eka mata kiyanna.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0017 ->', result);
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('Zoom meeting eka 7.30 AM da?');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0018 ->', result);
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('Rs. 5343 gewanna one.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0019 ->', result);
});

test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('25/12/2025 da appointment eka daanna.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0020 ->', result);
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('ml 200 witharai denna.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0021 ->', result);
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('NIC number eka type karanna.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0022 ->', result);
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('Documents tika attach karala email ekak yavanna.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0023 ->', result);
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('mama gedara inna. api passe kathaa karamu.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_Fun_0024 ->', result);
});

/* ================= NEGATIVE FUNCTIONAL (10) ================= */

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('oyaatakohomada');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0001 ->', result);
});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('matabathone');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0002 ->', result);
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('mama gedara yanawa!!!???...');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0003 ->', result);
});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('((dhen)) [inna] {passe}.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0004 ->', result);
});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('mama     gedara      inna.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0005 ->', result);
});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('mama gedara yanawa.\n\no yaa enawada?\napi yamu.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0006 ->', result);
});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill(
    'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana, mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.'
  );
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0007 ->', result);
});

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0008 ->', result);
});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('This is fully English text and should remain mostly English.');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0009 ->', result);
});

test('Neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('qazwsx edcrfv tgbnhy ujmkiolp');
  await page.waitForTimeout(5000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0010 ->', result);
});

/* ================= UI TEST (1) ================= */

test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();
  await input.fill('api dan yamu.');
  await page.waitForTimeout(5000);
  await input.fill('');
  await page.waitForTimeout(2000);
  const result = await page.locator('textarea').last().inputValue();
  console.log('Pos_UI_0001 ->', result);
});
