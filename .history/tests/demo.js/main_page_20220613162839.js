const { test, expect } = require('@playwright/test');

exports.main_pages = class main_page {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
    }
    async ToolSQA(){
        const tools = await this.page.locator('.card-body');
        const count = await tools.count();
        console.log("total locator count: " + count);
        for (let i = 0; i < count; i++){
            const text = await tools.nth(i).textContent();
            if (await text.includes('Book Store Application')){
                await tools.nth(i).click();
                break;
            }
        }
        for 
    }
    async Login(){
        const elements = await this.page.locator('.element-group');
        const count = await elements.count();
        for (let i = 0; i < count; i++) {
            const text = await elements.nth(i).textContent();
            if(await text.includes('Elements'));
            await elements.nth(i).click();
        }
        // await expect ( this.page.locator('.text')).toHaveText('Login');
    }
}