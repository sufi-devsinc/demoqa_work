const { test, expect } = require('@playwright/test');

//Js Files
//Js Files
const { Elements } = require('./demo.js/Element')
const { Widgets } = require('./demo.js/Widgets')
// Json Files
// const Element_TextBox_Negative = require('./demo.json/element.json');


let page;
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();    
});
test.afterAll(async ({ browser }) => {
    
});

test.describe('demoqa tests', async () => {
  
    test(`@Element Elements Part`, async () => {
        const Elements_1 = new Elements(page);
        await page.pause();
        await Elements_1.TestBox();
    });
    test(`@WidgetsAccordance`, async () => {
        const Widget_1 = new Widgets(page);
        await page.pause();
        await Widget_1.initialize();
        await Widget_1.Accordian();
    });
    test(`@AutoComplete Widget with autoComplete`, async () => {
        const Widget_2 = new Widgets(page);
        await page.pause();
        await Widget_2.initialize();
        await Widget_2.Auto_Complete();
    });
    test(`@datePicker widget datePicker autoComplete`, async () => {
        const Widget_3 = new Widgets(page);
        await Widget_3.initialize();
        await page.pause();
        await Widget_3.Date_Picker();

    })
});