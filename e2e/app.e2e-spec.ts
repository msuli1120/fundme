import { GoFundMePage } from './app.po';

describe('go-fund-me App', () => {
  let page: GoFundMePage;

  beforeEach(() => {
    page = new GoFundMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
