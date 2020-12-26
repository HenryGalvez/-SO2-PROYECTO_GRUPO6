import { by, element } from 'protractor';
import { AppPage } from './app.po';
export class LoginPage extends AppPage {
  get emailInput() {
    return element(by.name('email'));
  }
  get emailError() {
    return element(by.name('err-email'));
  }
  get passworInput() {
    return element(by.name('password'));
  }
  get passworError() {
    return element(by.name('err-password'));
  }
  get submitButton() {
    return element(by.name('signin'));
  }
  getEmailErrorMessage() {
    return this.emailError.getText() as Promise<any>;
  }
  getPasswordErrorMessage() {
    return this.passworError.getText() as Promise<any>;
  }
  writeEmail(email: string) {
    return this.emailInput.sendKeys(email) as Promise<any>;
  }
  writePassword(password: string) {
    return this.passworInput.sendKeys(password) as Promise<any>;
  }
  doLogin() {
    return this.submitButton.click() as Promise<any>;
  }
}