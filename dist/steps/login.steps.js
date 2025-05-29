"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const excelReader_1 = require("../utils/excelReader");
const locators = (0, excelReader_1.readExcelData)('data/locators.xlsx', 'LoginPage');
const urls = (0, excelReader_1.readExcelData)('data/URLS.xlsx', 'URLS');
(0, cucumber_1.Given)('I open the login page', async function () {
    await this.page.goto('https://luxequality.com/');
});
(0, cucumber_1.When)('I login with valid credentials', async function () {
    //   await this.page.fill('#username', 'user');
    //   await this.page.fill('#password', 'password');
    await this.page.click(locators['contactUsBtn']);
});
(0, cucumber_1.When)('I get some response', async function () {
    try {
        const response = await this.request.get(urls['basePage']);
        if (!response) {
            throw new Error('No response received');
        }
        this.response = response;
    }
    catch (error) {
        throw new Error('Get response step failed: ' + error);
    }
});
(0, cucumber_1.Then)('I should receive response {int}', async function (statusCode) {
    try {
        (0, test_1.expect)(this.response).toBeDefined();
        await (0, test_1.expect)(this.response.status()).toBe(statusCode);
    }
    catch (error) {
        throw new Error('Status code assertion failed: ' + error);
    }
});
(0, cucumber_1.Then)('I should be redirected to the dashboard', async function () {
    await (0, test_1.expect)(this.page).toHaveURL(urls['contactUsPage']);
});
