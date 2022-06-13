const {expect} = require('@playwright/test');

exports.BookStoreApplications = class BookStoreApplication {
    constructor(page){
            this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
        await this.page.locator('div:nth-child(5) > div > .card-up').click();
    }
    async login(){
        expect(await this.page.locator('#item-0'))
    }
}
