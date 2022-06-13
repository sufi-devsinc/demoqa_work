const { test, expect } = require('@playwright/test');

exports.main_pages = class main_page {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
    }
    async ToolSQA(){
        const tools = await this.page.locator('.card-up');
        console.log(tools)
        const count = await tools.count();
        for (let i = 0; i < count; i++){
            const text = await tools.nth(i).textContent();
            if (text.includes(''))
        }
    }
}