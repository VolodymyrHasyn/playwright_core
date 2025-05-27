import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I open the login page', async function () {
  await this.page.goto('https://luxequality.com/');
});

When('I login with valid credentials', async function () {
//   await this.page.fill('#username', 'user');
//   await this.page.fill('#password', 'password');
  await this.page.click('#contact-us-btn-header');
});

Then('I should be redirected to the dashboard', async function () {
  await expect(this.page).toHaveURL('https://luxequality.com/contacts/');
});
