import { Before, Given, Then, When, After } from 'cucumber';
import { expect } from 'chai';
import { LoginPage } from '../pages/login.po';
import { environment } from '../enviroments/enviroment.e2e';
import { urls } from '../pages/urls';
let page: LoginPage;
Before(() => {
    page = new LoginPage();
});
Given(/^I am on the login page$/, async () => {
    await page.navigateTo(urls.login);
});
When(/^I enter a correct username$/, async () => {
    await page.writeEmail(environment.credentials.email);
});
When(/^I enter incorrect user "([^"]*)"$/, async (incorrectUser) => {
    await page.writeEmail(incorrectUser);
});
When(/^I enter a correct password$/, async () => {
    await page.writePassword(environment.credentials.password);
});
When(/^I enter incorrect password "([^"]*)"$/, async (incorrectPassword) => {
    await page.writePassword(incorrectPassword);
});
When(/^I click on login$/, async () => {
    await page.doLogin();
});
Then(/^Go to home page$/, async () => {
    const currentURL = await page.getCurrentUrl();
    expect(currentURL).to.equal(`${page.baseUrl}${urls.home}`);
});
Then(/^Validate message for user incorrect "([^"]*)"$/, async (message) => {
    const emailErrorMessage = await page.getEmailErrorMessage();
    expect(emailErrorMessage).to.equal(message);
});
Then(/^Validate message for password incorrect "([^"]*)"$/, async (message) => {
    const passwordErrorMessage = await page.getPasswordErrorMessage();
    expect(passwordErrorMessage).to.equal(message);
});
After(async () => {
    await page.restartBrowser();
});