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
        const button = await this.page.locator('btn btn-light ');
        const count_1 = await button.count();
        

    }
    async Login(){
        const 
    }
}