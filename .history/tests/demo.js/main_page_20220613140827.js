const { test, expect } = require('@playwright/test');

exports.main_pages = class main_page {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
    }
    async ToolSQA(){
        const tools = await this.page.locator('//*[@id="app"]/div/div/div[2]/div/div');
        
        for (let i = 1; i < tools.length; i++){
        console.log(i);    
        }
    }
}