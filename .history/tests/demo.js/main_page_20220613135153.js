const { test, expect } = require('@playwright/test');

exports.main_pages = class main_page1 {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
    }
    async ToolSQA(){
        const tools = await this.page.locator('.card mt-4 top-card');
        console.log(tools);
    }
}