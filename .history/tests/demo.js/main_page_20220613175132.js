const { test, expect } = require('@playwright/test');

exports.main_pages = class main_page {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
    }
    async ToolSQA() {
        const tools = await this.page.locator('.card-body');
        const count = await tools.count();
        console.log("total locator count: " + count);
        for (let i = 0; i < count; i++) {
            const text = await tools.nth(i).textContent();
            if (await text.includes('Book Store Application')) {
                await tools.nth(i).click();
                break;
            }
        }
    }
    async Login() {
        const button = await this.page.locator('//*[@class="btn btn-light "]');
        const count_1 = await button.count();
        for (let i = 29; i < count_1; i++) {
            const text_1 = await button.nth(i).textContent();
            if (await text_1.includes('Login')) {
                await button.nth(i).click();
                break;
            }
        }
    }
    async Login_credits() {
        await expect(this.page.locator('.userForm')).toHaveText('Welcome')
    }

  // Click text=Welcome,
  await page.locator('text=Welcome,').click();
await page.locator('[placeholder="UserName"]').click();
await page.locator('[placeholder="UserName"]').fill('sufian');
await page.locator('[placeholder="Password"]').click();
await page.locator('[placeholder="Password"]').fill('sufian');
await page.locator('button:has-text("Login")').click();
await page.locator('text=Invalid username or password!').click();
await page.locator('[placeholder="UserName"]').click();
await page.locator('text=New User').click();
await expect(page).toHaveURL('https://demoqa.com/register');
await page.locator('[placeholder="First Name"]').click();
await page.locator('[placeholder="First Name"]').fill('sufian');
await page.locator('[placeholder="First Name"]').press('Tab');
await page.locator('[placeholder="Last Name"]').fill('shafiqie');
await page.locator('[placeholder="Last Name"]').press('Tab');
await page.locator('[placeholder="UserName"]').fill('sufian');
await page.locator('[placeholder="UserName"]').press('Tab');
await page.locator('[placeholder="Password"]').fill('sufian');
await page.frameLocator('iframe[role="presentation"]').locator('text=I\'m not a robot').click();
await page.frameLocator('iframe[name="c-pc3ujq8f9rb6"]').locator('td:nth-child(2)').first().click();
await page.frameLocator('iframe[name="c-pc3ujq8f9rb6"]').locator('td:nth-child(3)').first().click();
await page.frameLocator('iframe[name="c-pc3ujq8f9rb6"]').locator('tr:nth-child(3) > td:nth-child(2)').click();
await page.frameLocator('iframe[name="c-pc3ujq8f9rb6"]').locator('text=Verify').click();
await page.locator('button:has-text("Register")').click();
await page.locator('[placeholder="Password"]').click();
await page.locator('[placeholder="Password"]').fill('sufian1');
await page.frameLocator('iframe[role="presentation"]').locator('span[role="checkbox"]').click();
await page.frameLocator('iframe[name="c-8tl8dbnbnzav"]').locator('td:nth-child(3)').first().click();
await page.frameLocator('iframe[name="c-8tl8dbnbnzav"]').locator('tr:nth-child(3) > td').first().click();
await page.frameLocator('iframe[name="c-8tl8dbnbnzav"]').locator('tr:nth-child(3) > td:nth-child(2)').click();
await page.frameLocator('iframe[name="c-8tl8dbnbnzav"]').locator('text=Verify').click();
await page.locator('button:has-text("Register")').click();
await page.locator('[placeholder="Password"]').click();
await page.locator('[placeholder="Password"]').press('ArrowLeft');
await page.locator('[placeholder="Password"]').press('ArrowLeft');
await page.locator('[placeholder="Password"]').press('ArrowLeft');
await page.locator('[placeholder="Password"]').press('ArrowLeft');
await page.locator('[placeholder="Password"]').press('ArrowLeft');
// Press ArrowLeft
await page.locator('[placeholder="Password"]').press('ArrowLeft');
// Press ArrowLeft
await page.locator('[placeholder="Password"]').press('ArrowLeft');
// Press ArrowLeft
await page.locator('[placeholder="Password"]').press('ArrowLeft');
// Press ArrowLeft
await page.locator('[placeholder="Password"]').press('ArrowLeft');
// Fill [placeholder="Password"]
await page.locator('[placeholder="Password"]').fill('Sufian1');
// Click span[role="checkbox"]
await page.frameLocator('iframe[role="presentation"]').locator('span[role="checkbox"]').click();
// Click .rc-imageselect-tile >> nth=0
await page.frameLocator('iframe[name="c-vm9vdajxlj0d"]').locator('.rc-imageselect-tile').first().click();
// Click tr:nth-child(3) > td:nth-child(2)
await page.frameLocator('iframe[name="c-vm9vdajxlj0d"]').locator('tr:nth-child(3) > td:nth-child(2)').click();
// Click tr:nth-child(3) > td:nth-child(3)
await page.frameLocator('iframe[name="c-vm9vdajxlj0d"]').locator('tr:nth-child(3) > td:nth-child(3)').click();
// Click text=Verify
await page.frameLocator('iframe[name="c-vm9vdajxlj0d"]').locator('text=Verify').click();
// Click button:has-text("Register")
await page.locator('button:has-text("Register")').click();
// Triple click [placeholder="Password"]
await page.locator('[placeholder="Password"]').click({
    clickCount: 3
});
// Fill [placeholder="Password"]
await page.locator('[placeholder="Password"]').fill('Sufian@1');
// Click text=I'm not a robot
await page.frameLocator('iframe[role="presentation"]').locator('text=I\'m not a robot').click();
// Click .rc-imageselect-tile >> nth=0
await page.frameLocator('iframe[name="c-ljj5wc1m6ydu"]').locator('.rc-imageselect-tile').first().click();
// Click td:nth-child(3) >> nth=0
await page.frameLocator('iframe[name="c-ljj5wc1m6ydu"]').locator('td:nth-child(3)').first().click();
// Click tr:nth-child(3) > td >> nth=0
await page.frameLocator('iframe[name="c-ljj5wc1m6ydu"]').locator('tr:nth-child(3) > td').first().click();
// Click text=Verify
await page.frameLocator('iframe[name="c-ljj5wc1m6ydu"]').locator('text=Verify').click();
// Click button:has-text("Register")
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
});
await page.locator('button:has-text("Register")').click();
// Click text=Back to Login
await page.locator('text=Back to Login').click();
await expect(page).toHaveURL('https://demoqa.com/login');
// Click [placeholder="UserName"]
await page.locator('[placeholder="UserName"]').click();
// Fill [placeholder="UserName"]
await page.locator('[placeholder="UserName"]').fill('sufian');
// Press Tab
await page.locator('[placeholder="UserName"]').press('Tab');
// Fill [placeholder="Password"]
await page.locator('[placeholder="Password"]').fill('Sufian@1');
// Press Enter
await Promise.all([
    page.waitForNavigation(/*{ url: 'https://demoqa.com/profile' }*/),
    page.locator('[placeholder="Password"]').press('Enter')
]);

}