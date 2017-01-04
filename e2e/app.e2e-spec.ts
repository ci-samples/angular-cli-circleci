import { AngularCliCircleciPage } from './app.po';

describe('angular-cli-circleci App', function() {
  let page: AngularCliCircleciPage;

  beforeEach(() => {
    page = new AngularCliCircleciPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
