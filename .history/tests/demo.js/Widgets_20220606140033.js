exports.Widgets = class Element {
    constructor(page) {
        this.page = page;
    }
    async TestBox() {
        await this.page.locator("#userName").click();
        await this.page.locator("#userEmail").click();
        await this.page.locator("#currentAddress").click();
        await this.page.locator("#permanentAddress").click();
        await this.page.locator("#submit").click();
    }

}