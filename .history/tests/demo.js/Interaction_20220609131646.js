exports.interactions = class interaction {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
        await this.page.locator('div:nth-child(4) > div > .card-up').click();
    }
    async Sortable(){
        
    }
    async Selectable(){

    }
    async Resizable(){

    }
    async Droppable(){

    }
    async Dragabble(){

    }
}
