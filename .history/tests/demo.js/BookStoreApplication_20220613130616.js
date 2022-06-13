const {expect} = require('@playwright/test');

exports.BookStoreApplications = class BookStoreApplication {
    constructor(page){
            this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
        await this.page.locator('div:nth-ch').click();
    }
    async login(){
        expect(await this.page.locator('#item-0')).toHaveText('')
    }
}
