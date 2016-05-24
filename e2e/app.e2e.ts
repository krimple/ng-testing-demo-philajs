import { NgTestingDemoPage } from './app.po';

describe('ng-testing-demo App', function() {
  let page: NgTestingDemoPage;

  beforeEach(() => {
    page = new NgTestingDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-testing-demo works!');
  });
});
