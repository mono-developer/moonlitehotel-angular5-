import { element, browser, by, $ } from 'protractor';

export class DevelopClassesPage {
  navigateTo() {
    return browser.get('/develop-classes');
  }

  navigateToPreWorkPage() {
    return browser.get('/develop-classes/in-person/a44fcd');
  }

  navigateToPostPreWorkPage() {
    return browser.get('/develop-classes/postprework/in-person/a44fcd');
  }

  gotoClassPreworkPage() {
    element(by.css('.class-table__item')).click();
  }
  gotoClassPostPreworkPage() {
    element(by.css('.class-work__icon')).click();
  }

  onShowErrorAlert() {
    element(by.css('.complete-class')).click();
  }
  getAlertCloseIcon() {
    return element(by.css('.error-alert__icon'));
  }
}
