exports.Widgets = class Widget {
    constructor(page) {
        this.page = page;
    }
    async initialize() {
        await this.page.goto('https://demoqa.com/');
        await this.page.locator('div:nth-child(4) > div > .card-up').click();
    }
    async Accordian() {
        await this.page.locator('li:has-text("Accordian")').click();
        await this.page.locator('text=Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem').click();
        await this.page.locator('text=What is Lorem Ipsum?').click();
        await this.page.locator('text=Where does it come from?').click();
        await this.page.locator('text=Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots ').click();
        await this.page.locator('text=Where does it come from?').click();
        await this.page.locator('text=Why do we use it?').click();
        await this.page.locator('text=It is a long established fact that a reader will be distracted by the readable c').click();
    }
    async Auto_Complete() {
        await this.page.locator('li:has-text("Auto Complete")').click();
        // await page.locator('.auto-complete__value-container').first().click();
        for (let i = 0; i < )
        await this.page.locator('text=Type multiple color names 0 results available. Use Up and Down to choose options >> input[type="text"]').fill('red');
        
        await this.page.locator('text=Type multiple color names option Red, selected. 0 results available. Select is f >> input[type="text"]').fill('blue');
        await this.page.locator('#autoCompleteSingleInput').fill('red');
    }

}