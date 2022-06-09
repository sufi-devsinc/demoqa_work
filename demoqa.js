import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://demoqa.com/
  await page.goto('https://demoqa.com/');

  // Click div:nth-child(4) > div > .card-up
  await page.locator('div:nth-child(4) > div > .card-up').click();
  await expect(page).toHaveURL('https://demoqa.com/widgets');

  // Click text=Select Menu
  await page.locator('text=Select Menu').click();
  await expect(page).toHaveURL('https://demoqa.com/select-menu');

  // Click #withOptGroup svg
  await page.locator('#withOptGroup svg').click();

  // Click #react-select-2-option-3
  await page.locator('#react-select-2-option-3').click();

  // Click #withOptGroup div:has-text("Another root option") >> nth=1
  await page.locator('#withOptGroup div:has-text("Another root option")').nth(1).click();

  // Click #react-select-2-option-2
  await page.locator('#react-select-2-option-2').click();

  // Click #selectOne div:has-text("Select Title") >> nth=1
  await page.locator('#selectOne div:has-text("Select Title")').nth(1).click();

  // Click #react-select-3-option-0-3
  await page.locator('#react-select-3-option-0-3').click();

  // Click #selectOne div:has-text("Ms.") >> nth=1
  await page.locator('#selectOne div:has-text("Ms.")').nth(1).click();

  // Click #react-select-3-option-0-1
  await page.locator('#react-select-3-option-0-1').click();

  // Select 7
  await page.locator('#oldSelectMenu').selectOption('7');

  // Select 4
  await page.locator('#oldSelectMenu').selectOption('4');

  // Click div:nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3
  await page.locator('div:nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click();

  // Click #react-select-4-option-2
  await page.locator('#react-select-4-option-2').click();

  // Click #react-select-4-option-1
  await page.locator('#react-select-4-option-1').click();

  // Click #react-select-4-option-0
  await page.locator('#react-select-4-option-0').click();

  // Click #react-select-4-option-3
  await page.locator('#react-select-4-option-3').click();

  // Click select[name="cars"]
  await page.locator('select[name="cars"]').click();

  // Click select[name="cars"]
  await page.locator('select[name="cars"]').click();

  // Click select[name="cars"]
  await page.locator('select[name="cars"]').click();

  // Click select[name="cars"]
  await page.locator('select[name="cars"]').click();

  // Click select[name="cars"]
  await page.locator('select[name="cars"]').click({
    modifiers: ['Control']
  });

});