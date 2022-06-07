const { test, expect } = require('@playwright/test');

//Js Files
const { Elements } = require('./Demoqa_js/Elements');

// Json Files
const Element_TextBox_Negative = require('./Demoqa_Json/Element_TextBox_Negative.json');
const Element_TextBox_Positive = require('./Demoqa_Json/Element_TextBox_Positive.json');


let page;
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoqa.com/');
    
});


test.describe('demoqa tests', async () => {
    // BeforeAll Tests
    test('Elements Part', async () => {
        const Elements_1 = new Elements(page);
        await page.pause();
        await Elements_1.TestBox();
    });
});