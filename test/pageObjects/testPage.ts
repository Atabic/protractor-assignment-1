import { element, browser, $$, by } from 'protractor';

export class TestPage {
    get() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.kayak.com');
    }
    getCurrentUrl () {
        browser.waitForAngularEnabled(false);
        return browser.getCurrentUrl();
    }
    getFlightElement() {
        browser.waitForAngularEnabled(false);
        return element.all(by.css('.hsCY-menu-item-title hsCY-active')).getText();
        // $$('.hsCY-menu-item-title hsCY-active').getText();
    }
}