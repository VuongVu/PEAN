import { PEANPage } from './app.po';

describe('pean App', () => {
  let page: PEANPage;

  beforeEach(() => {
    page = new PEANPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
