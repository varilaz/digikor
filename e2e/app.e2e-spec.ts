import { DigikorPage } from './app.po';

describe('digikor App', () => {
  let page: DigikorPage;

  beforeEach(() => {
    page = new DigikorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
