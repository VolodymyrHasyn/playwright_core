"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
(0, cucumber_1.Given)('I open the login page', async function () {
    await this.page.goto('https://example.com/login');
});
(0, cucumber_1.When)('I login with valid credentials', async function () {
    await this.page.fill('#username', 'user');
    await this.page.fill('#password', 'password');
    await this.page.click('button[type="submit"]');
});
(0, cucumber_1.Then)('I should be redirected to the dashboard', async function () {
    await (0, test_1.expect)(this.page).toHaveURL(/.*dashboard/);
});
