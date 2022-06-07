exports.Widgets = class Widget {
    constructor(page) {
        this.page = page;
    }
    async () {
        await this.page.locator("#userName").click();
        await this.page.locator("#userEmail").click();
        await this.page.locator("#currentAddress").click();
        await this.page.locator("#permanentAddress").click();
        await this.page.locator("#submit").click();
    }

}