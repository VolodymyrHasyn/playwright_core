"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwright_1 = require("playwright");
class CustomWorld extends cucumber_1.World {
}
(0, cucumber_1.setWorldConstructor)(CustomWorld);
(0, cucumber_1.Before)(async function () {
    this.browser = await playwright_1.chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});
(0, cucumber_1.After)(async function () {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
});
