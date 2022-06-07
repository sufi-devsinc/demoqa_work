const { test, expect } = require('@playwright/test');

//Js Files
const { Elements } = require('./Demoqa_js/Elements');
//Js Files
const { Elements } = require('./demo.js/Element')
const { Elements } = require('./demo.js/Widgets')
// Json Files
const Element_TextBox_Negative = require('./demo.json/element.json');


let page;
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();    
});


test.describe('demoqa tests', async () => {
  
    test(`@Element Elements Part`, async () => {
        const Elements_1 = new Elements(page);
        await page.pause();
        await Elements_1.TestBox();
    });
    test(`@WidgetsAccordance`, async () => {
        
    });
});