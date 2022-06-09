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
    await page.close();
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
    });
    test(`@slider widget slider autoComplete`, async () => {
        const Widget_4 = new Widgets(page);
        await Widget_4.initialize();
        await page.pause();
        await Widget_4.Slider();
    })
    test(`@Tabs Widgets with tabs`, async() => {
        const Widget_5 = new Widgets(page);
        await Widget_5.initialize();
        await page.pause();
        await Widget_5.Tabs();
    })
    test(`@Menu Widgets with menu`, async () => {
        const Widget_6 = new Widget(page);
        await Widget_.initialize();
    })


});