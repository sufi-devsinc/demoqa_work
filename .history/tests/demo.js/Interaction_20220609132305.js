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
        await this.page.locator('.mt-2 list-group-item active list-group-item-action').click();    
    }
    async Resizable(){

    }
    async Droppable(){

    }
    async Dragabble(){

    }
}
