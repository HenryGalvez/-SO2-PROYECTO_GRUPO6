import { Before, Given, Then, When, After } from 'cucumber';
import { expect } from 'chai';
import { TasksPage } from '../pages/tasks.po';
import { urls } from '../pages/urls';
let page: TasksPage;
Before(() => {
    page = new TasksPage();
});
Given(/^Voy a la pagina de tareas privadas$/, async () => {
    await page.navigateTo(urls.home);
});
Then(/^Redireccionar a la pagina de tareas publicas$/, async (length) => {
    const currentURL = await page.getCurrentUrl();
    expect(currentURL).to.equal(`${page.baseUrl}${urls.task}`);
});
After(async () => {
    await page.restartBrowser();
});