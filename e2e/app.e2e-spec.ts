import { Angular4DirectivesPage } from './app.po';

describe('angular4-directives App', () => {
  let page: Angular4DirectivesPage;

  beforeEach(() => {
    page = new Angular4DirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
