import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://demoqa.com/
  await page.goto('https://demoqa.com/');

  // Click div:nth-child(4) > div > .card-up
  await page.locator('div:nth-child(4) > div > .card-up').click();
  await expect(page).toHaveURL('https://demoqa.com/widgets');

  // Click li:has-text("Progress Bar")
  await page.locator('li:has-text("Progress Bar")').click();
  await expect(page).toHaveURL('https://demoqa.com/progress-bar');

  // Click #progressBar
  await page.locator('#progressBar').click();

  // Click text=Start
  await page.locator('text=Start').click();

  // Click text=Stop
  await page.locator('text=Stop').click();

  // Click #progressBar
  await page.locator('#progressBar').click();

  // Click #progressBar
  await page.locator('#progressBar').click();

  // Click text=Start
  await page.locator('text=Start').click();

  // Click text=Stop
  await page.locator('text=Stop').click();

});