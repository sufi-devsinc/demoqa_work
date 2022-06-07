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
        await this.page.locator('#autoCompleteMultipleContainer').first().click();
        await this.page.locator('.auto_complete__value-container').fill('red');
        await this.page.locator('text=Type multiple color names option Red, selected. 0 results available. Select is f >> input[type="text"]').fill('blue');
        await this.page.locator('text=RedBlue >> input[type="text"]').fill('bla');
        await this.page.locator('text=RedBlack >> input[type="text"]').fill('g');
        await this.page.locator('text=RedBlack >> input[type="text"]').press('Enter');
        await this.page.locator('text=RedBlackGreen >> input[type="text"]').fill('pur');
        await this.page.locator('text=RedBlackGreen >> input[type="text"]').press('Tab');
        await this.page.locator('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').click();
        await this.page.locator('text=Type single color name 0 results available. Use Up and Down to choose options, p >> input[type="text"]').fill('red');
        await this.page.locator('text=Type single color name option Red, selected. 0 results available. Use Up and Dow >> input[type="text"]').fill('blue');

    }
    async Date_Picker() {
        await this.page.locator('li:has-text("Date Picker")').click();
        // await expect(page).toHaveURL('https://demoqa.com/date-picker');
        await this.page.locator('#datePickerMonthYearInput').click();
        await this.page.locator('select').first().selectOption('9');
        await this.page.locator('select').nth(1).selectOption('2013');
        await this.page.locator('[aria-label="Choose Monday\\, October 14th\\, 2013"]').click();
        await this.page.locator('#dateAndTimePickerInput').click();
        await this.page.locator('[aria-label="Choose Tuesday\\, June 14th\\, 2022"]').click();
        await this.page.locator('text=June2022 >> span').first().click();
        await this.page.locator('text=November').click();
        await this.page.locator('span:has-text("2022")').click();
        await this.page.locator('div:nth-child(13)').click();
        await this.page.locator('text=2016').click();
        await this.page.locator('[aria-label="Choose Wednesday\\, November 30th\\, 2016"]').click();
        await this.page.locator('text=17:00').click();

    }
    async Slider() {

        // Click li:has-text("Slider")
        await this.page.locator('li:has-text("Slider")').click();
        // await expect(page).toHaveURL('https://demoqa.com/slider');
        // Click input[type="range"]
        await this.page.locator('input[type="range"]').click();
        await this.page.forwards('input[type="range"]').click();
        await this.page.forwards('input[type="range"]').click();
\
    }

}