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
        await this.page.locator('.mt-2 list-group-item list-group-item-action').click();
        await page.locator('text=Selectable').click();
        await expect(page).toHaveURL('https://demoqa.com/selectable');
        // Click text=Cras justo odio
        await page.locator('text=Cras justo odio').click();
        // Click text=Cras justo odio
        await page.locator('text=Cras justo odio').click();
        // Click text=Grid
        await page.locator('text=Grid').click();
        // Click li:has-text("One")
        await page.locator('li:has-text("One")').click();
        // Click li:has-text("One")
        await page.locator('li:has-text("One")').click();
      
    }
    async Resizable(){

    }
    async Droppable(){

    }
    async Dragabble(){

    }
}
