import { browser, by, element, ElementFinder, $, $$ } from 'protractor';

export class AppPage {
  navigateTo(url?: string): Promise<unknown> {
    return browser.get(url ? url : browser.baseUrl) as Promise<unknown>;
  }

  getElementText(selector: string): Promise<string> {
    // return element(by.css(selector)).getText() as Promise<string>;
    return $(selector).getText() as Promise<string>;
  }

  getElement(selector: string): ElementFinder {
    // return element(by.css(selector));
    return $(selector);
  }
}
