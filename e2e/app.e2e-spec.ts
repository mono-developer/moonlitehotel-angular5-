import { InboxPage } from './pages/inbox.page.e2e-spec';
import { FacilitatorListPage } from './pages/facilitator-list.page.e2e-spec';
import { DownloadPage } from './pages/download.page.e2e-spec';
import { CoachRelationShipPage } from './pages/coach-relationship.page.e2e-spec';
import { DevelopClassesPage } from './pages/develop-classes.page.e2e-spec';
import { browser } from 'protractor';

describe('moon-lite App', () => {
  let inboxPage: InboxPage;
  let facilitatorPage: FacilitatorListPage;
  let downloadPage: DownloadPage;
  let coachRelationShipPage: CoachRelationShipPage;
  let developClassesPage: DevelopClassesPage;

  beforeEach(() => {
    inboxPage = new InboxPage();
    facilitatorPage = new FacilitatorListPage();
    downloadPage = new DownloadPage();
    coachRelationShipPage = new CoachRelationShipPage();
    developClassesPage = new DevelopClassesPage();
  });

  it('should be no results', () => {
    inboxPage.navigateTo();
    inboxPage.search('ssss');
    browser.sleep(1000);
    expect(inboxPage.getNumberFacilitators()).toEqual(0);
  });

  it('should be results', () => {
    inboxPage.navigateTo();
    inboxPage.search('Curtis');
    browser.sleep(1500);
    expect(inboxPage.getNumberFacilitators()).toBeGreaterThan(0);
  });

  it('should be no Alerts', () => {
    inboxPage.navigateTo();
    inboxPage.onCloseAlert();
    browser.sleep(1500);
    const elm = inboxPage.getAlertBody();
    expect(elm.isPresent()).toBeFalsy();
  });

  it('should be open Filter', () => {
    inboxPage.navigateTo();
    inboxPage.onOpenFilter();
    browser.sleep(1500);
    const elm = inboxPage.getFilterCloseIcon();
    expect(elm.isPresent()).toBeTruthy();
  });

  it('should be changed Main Tab', () => {
    inboxPage.navigateTo();
    inboxPage.changeMainTab();
    browser.sleep(1500);
    const title = inboxPage.getNextMainTabTitle();
    expect(title).toEqual('Connection Requests Received');
  });

  it('should be no facilitators', () => {
    facilitatorPage.navigateTo();
    facilitatorPage.search('ssss');
    browser.sleep(1000);
    expect(facilitatorPage.getNumberFacilitators()).toEqual(0);
  });

  it('should be facilitators', () => {
    facilitatorPage.navigateTo();
    facilitatorPage.search('Cindy');
    browser.sleep(1500);
    expect(facilitatorPage.getNumberFacilitators()).toBeGreaterThan(0);
  });

  it('should be open Information on facilitatorlist page', () => {
    facilitatorPage.navigateTo();
    facilitatorPage.openInformation();
    browser.sleep(1500);
    const elm = facilitatorPage.getInforamtionClass();
    expect(elm.isPresent()).toBeTruthy();
  });

  it('should go to facilitator page', () => {
    facilitatorPage.navigateTo();
    facilitatorPage.gotoDetail();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/facilitators/US12247');
  });

  it('should be open download page', () => {
    downloadPage.navigateTo();
    const title = downloadPage.getHeaderTitle();
    expect(title).toEqual('Downloads');
  });

  it('should be no users on coach-realtionship page', () => {
    coachRelationShipPage.navigateTo();
    coachRelationShipPage.search('ssss');
    browser.sleep(1000);
    expect(coachRelationShipPage.getNumberUsers()).toEqual(0);
  });

  it('should be users on coach-realtionship page', () => {
    coachRelationShipPage.navigateTo();
    coachRelationShipPage.search('Vince');
    browser.sleep(1500);
    expect(coachRelationShipPage.getNumberUsers()).toBeGreaterThan(0);
  });

  it('should be open Filter', () => {
    coachRelationShipPage.navigateTo();
    coachRelationShipPage.onOpenFilter();
    browser.sleep(1500);
    const elm = coachRelationShipPage.getFilterCloseIcon();
    expect(elm.isPresent()).toBeTruthy();
  });

  it('should go to select member page', () => {
    coachRelationShipPage.navigateTo();
    coachRelationShipPage.gotoSelectPage();
    browser.sleep(1500);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/coach-relationships/select/org');
  });

  it('should be all checked on coach-realtionship page', () => {
    coachRelationShipPage.navigateTo();
    coachRelationShipPage.onClickSelectAll();
    browser.sleep(1500);
    expect(coachRelationShipPage.getCheckedUsers()).toBeGreaterThan(0);
  });

  it('should go to Class Prework page on Develop/Classes module', () => {
    developClassesPage.navigateTo();
    developClassesPage.gotoClassPreworkPage();
    browser.sleep(1500);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/develop-classes/in-person/a44fca');
  });
  it('should go to Class PostPrework page on Develop/Classes module', () => {
    developClassesPage.navigateToPreWorkPage();
    developClassesPage.gotoClassPostPreworkPage();
    browser.sleep(1500);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/develop-classes/postprework/in-person/a44fcd');
  });

  it('should appear alert on Develop/Classes module', () => {
    developClassesPage.navigateToPostPreWorkPage();
    developClassesPage.onShowErrorAlert();
    browser.sleep(1500);
    const elm = developClassesPage.getAlertCloseIcon();
    expect(elm.isPresent()).toBeTruthy();
  });

});
