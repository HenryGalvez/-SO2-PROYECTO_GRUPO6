import { browser } from 'protractor';
export class AppPage {
  get baseUrl() {
    return browser.baseUrl;
  }
  navigateTo(page?: string) {
    const url = page ? `${this.baseUrl}${page}` : browser.baseUrl;
    return browser.get(url) as Promise<any>;
  }
  wait(milliseconds: number) {
    return browser.sleep(milliseconds) as Promise<any>;
  }
  getCurrentUrl() {
    return browser.getCurrentUrl() as Promise<any>;
  }
  restartBrowser() {
    return browser.restart() as Promise<any>;
  }
}