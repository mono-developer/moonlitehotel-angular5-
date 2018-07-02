import { element, browser, by, $ } from 'protractor';

export class CoachRelationShipPage {
  navigateTo() {
    return browser.get('/coach-relationships/org_admin');
  }

  search(query: string) {
    element.all(by.name('search')).sendKeys(query);
  }

  getNumberUsers(): any {
    return element.all(by.css('.user-row')).count();
  }

  onOpenFilter() {
    element(by.css('.filter-searchbar__filter')).click();
  }

  getFilterCloseIcon() {
    return element(by.css('.filter-searchbar__closeicon'));
  }

  onClickSelectAll() {
    element(by.css('.user-table-header__checkmark')).click();
  }
  getCheckedUsers(): any {
    return element.all(by.css('.user-row__checkmarkimg')).count();
  }

  gotoSelectPage() {
    element(by.css('.relationship-button')).click();
  }
}
