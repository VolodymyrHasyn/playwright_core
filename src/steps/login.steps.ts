import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { readExcelData } from '../utils/excelReader'

const locators = readExcelData('data/locators.xlsx', 'LoginPage');
const urls = readExcelData('data/URLS.xlsx', 'URLS')


Given('I open the login page', async function () {
  await this.page.goto('https://luxequality.com/');
});

When('I login with valid credentials', async function () {
//   await this.page.fill('#username', 'user');
//   await this.page.fill('#password', 'password');
  await this.page.click(locators['contactUsBtn']);
});

When('I get some response', async function () {
  try {
    const response = await this.request.get(urls['basePage']);
    if (!response) {
      throw new Error('No response received');
    }
    this.response = response;
  } catch (error) {
    throw new Error('Get response step failed: ' + error);
  }
});

Then('I should receive response {int}', async function (statusCode: number) {
  try {
    expect(this.response).toBeDefined();
    await expect(this.response.status()).toBe(statusCode);
  } catch (error) {
    throw new Error('Status code assertion failed: ' + error);
  }
});


Then('I should be redirected to the dashboard', async function () {
  await expect(this.page).toHaveURL(urls['contactUsPage']);
});
