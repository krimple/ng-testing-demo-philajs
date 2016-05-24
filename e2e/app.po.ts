export class NgTestingDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-testing-demo-app h1')).getText();
  }
}
