const { test, expect } = require('@playwright/test');

exports.interactions = class interaction {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
        await this.page.locator('div:nth-child(5) > div > .card-up').click();
    }
    async Sortable(){
        
    }
    async Selectable(){
        await this.page.locator('li:has-text("Selectable")').click();
        await this.page.locator('text=Cras justo odio').click();
        await expect (this.page.locator('text=Cras justo odio')).toHaveText('Cras justo odio');
        await this.page.locator('text=Grid').click();
        await this.page.locator('li:has-text("One")').click();
        await expect(await this.page.locator('li:has-text("One")')).toHaveText('One');
    }
    async Resizable(){

    }
    async Droppable(){

    }
    async Dragabble(){

    }
}
