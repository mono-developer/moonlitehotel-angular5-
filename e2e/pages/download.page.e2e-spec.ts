import { element, browser, by, $ } from 'protractor';

export class DownloadPage {
  navigateTo() {
    return browser.get('/download');
  }

  getHeaderTitle() {
    return element(by.css('.download__header')).getText();
  }
}
