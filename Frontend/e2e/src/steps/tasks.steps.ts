import { Before, Given, Then, When, After } from 'cucumber';
import { expect } from 'chai';
import { TasksPage } from '../pages/tasks.po';
import { urls } from '../pages/urls';
let page: TasksPage;
Before(() => {
    page = new TasksPage();
});
Given(/^Yo estoy en la pagina tareas$/, async () => {
    await page.navigateTo(urls.task);
});
Then(/^Validar que tenga "([^"]*)" tareas$/, async (length) => {
    const listLength = await page.getLengthList();
    expect(length).to.equal(listLength+"");
});
After(async () => {
    await page.restartBrowser();
});