const { test, expect } = require('@playwright/test');

exports.interactions = class interaction {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
    }
    async Tool_SQA(){
        const tools = await this.page.locator()
    }
}