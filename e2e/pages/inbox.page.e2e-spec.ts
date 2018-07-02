import { element, browser, by, $ } from 'protractor';

export class InboxPage {
  navigateTo() {
    return browser.get('/');
  }

  search(query: string) {
    element.all(by.name('search')).sendKeys(query);
  }

  getNumberFacilitators(): any {
    return element.all(by.css('.invitation-received__item')).count();
  }

  onCloseAlert() {
    element(by.css('.alert-message__close')).click();
  }

  getAlertBody() {
    return element(by.css('.alert-message'));
  }

  onOpenFilter() {
    element(by.css('.filter-searchbar__filter')).click();
  }

  getFilterCloseIcon() {
    return element(by.css('.filter-searchbar__closeicon'));
  }

  changeMainTab() {
    element(by.css('#ngb-tab-1')).click();
  }

  getNextMainTabTitle() {
    return element(by.css('.tab-header__title')).getText();
  }
}
