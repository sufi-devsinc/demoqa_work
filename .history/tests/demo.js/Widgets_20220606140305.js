exports.Widgets = class Widget {
    constructor(page) {
        this.page = page;
    }
    async Accordian() {
        // Go to https://demoqa.com/
  await page.goto('https://demoqa.com/');

  // Click div:nth-child(4) > div > .card-up
  await page.locator('div:nth-child(4) > div > .card-up').click();
  await expect(page).toHaveURL('https://demoqa.com/widgets');

  // Click li:has-text("Accordian")
  await page.locator('li:has-text("Accordian")').click();
  await expect(page).toHaveURL('https://demoqa.com/accordian');

  // Click text=Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
  await page.locator('text=Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem').click();
  await page.locator('text=What is Lorem Ipsum?').click();
  await page.locator('text=Where does it come from?').click();
  await page.locator('text=Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots ').click();
  await page.locator('text=Where does it come from?').click();
  await page.locator('text=Why do we use it?').click();
  await page.locator('text=It is a long established fact that a reader will be distracted by the readable c').click();
    }

}