import { by, element } from 'protractor';
import { AppPage } from './app.po';
export class PrivateTasksPage extends AppPage {
  get listTasks() {
    return element(by.name('list-tasks')).all(by.css("li"));
  }
  getLengthList() {
    return this.listTasks.count() as Promise<any>;
  }
}