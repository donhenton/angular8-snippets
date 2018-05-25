import { Angular4SnippetsPage } from './app.po';

describe('angular4-snippets App', () => {
  let page: Angular4SnippetsPage;

  beforeEach(() => {
    page = new Angular4SnippetsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
