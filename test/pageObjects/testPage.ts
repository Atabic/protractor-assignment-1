import { element, browser, $$, by } from 'protractor';

export class TestPage {
    async get(): Promise<void> {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.kayak.com');
    }
    async getCurrentUrl () : Promise<String> {
        // browser.waitForAngularEnabled(false);
        return browser.getCurrentUrl();
    }
    async getFlightElement() : Promise <void> {
        let FlightElement = element(by.css('a[aria-label*="flights"]'))
        browser.waitForAngularEnabled(false);
        FlightElement.click()
    }
    async checkVisibleFields() {
        let form = element.all(by.css('div[class*="formFieldOutline"]')).each((ele, index)=> {
            if (!ele.isDisplayed()) {
                Promise.reject();
            }
        })
        return form;
    }
    async changeTripType (value:String) :Promise<String> {
        browser.waitForAngularEnabled(false);
        let tripType = element(by.css('div.wIIH[role*="button"][tabindex*="0"]'))
        tripType.click();
        element(by.css('li[aria-label="' + value +  '"]')).click();
        return tripType.getText();
    }
}