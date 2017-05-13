import { BelugaWhalePage } from './app.po';

describe('beluga-whale App', () => {
  let page: BelugaWhalePage;

  beforeEach(() => {
    page = new BelugaWhalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
