const {expect} = require('@playwright/test');

exports.BookStoreApplications = class BookStoreApplication {
    constructor(page){
            this.page = page;
    }
    
}
