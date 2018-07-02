import { element, browser, by, $ } from 'protractor';

export class FacilitatorListPage {
  navigateTo() {
    return browser.get('/facilitators');
  }

  search(query: string) {
    element.all(by.name('search')).sendKeys(query);
  }

  getNumberFacilitators(): any {
    return element.all(by.css('.facilitator-item')).count();
  }

  openInformation() {
    element(by.css('.information-accordian__header')).click();
  }

  getInforamtionClass() {
    return element(by.css('.information-accordian__body'));
  }

  gotoDetail() {
    element(by.css('.facilitator-item')).click();
  }
}
