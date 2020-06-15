import { AppPage } from './app.po';
import { browser, logging, element } from 'protractor';

describe('workspace-project App', () => {
  const page = new AppPage();

  beforeEach(() => {
    // page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getElementText('a')).not.toEqual('auto app is running!');
  });

  it('should show child page and show content text as "Demo"', () => {
    // page.navigateTo();
    expect(page.getElementText('a')).toEqual('Go Demo');
    page.getElement('a').click();
    expect(page.getElement('button')).not.toBeNull();
    expect(page.getElementText('button')).toEqual('Click me!');
    page.getElement('button').click();
    expect(page.getElementText('span')).toMatch(/on/i);
    page.getElement('button').click();
    // browser.driver.sleep(5000);
    expect(page.getElementText('span')).toMatch(/off/i);
  });

  it('should keep off', () => {
    expect(page.getElementText('span')).toMatch(/off/i);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
