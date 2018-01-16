import { Ng5SelectPage } from './app.po';

describe('ng5-select App', () => {
  let page: Ng5SelectPage;

  beforeEach(() => {
    page = new Ng5SelectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
