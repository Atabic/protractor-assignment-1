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
    async clickElementMultipleTimes() {
        browser.waitForAngularEnabled(false);
        const adult = element.all(by.css('div[class*="pres-default"][role*="button"][tabindex*="0"]')).filter(async (ele) => {
            if(await ele.getText() === '1 adult') {
                return ele;
            }
        })
        adult.click();
        const incrementButton = element.all(by.css('button[tabindex*="-1"][aria-label*="Decrement"][aria-disabled*="false"]'))
        // const inputField = element(by.css('input[tabindex*="0"][role*="slider"][aria-valuenow*="9"][aria-valuemin*="0"]')).getText();
        for (let i = 0; i < 9; i++) {
            if (i === 0) {
                incrementButton.first().click();
            } else {
                incrementButton.get(1).click();
            }
        }
        element.all(by.css('button.bCGf-mod-button-disabled[tabindex*="-1"][aria-label*="Decrement"][aria-disabled*="true"]')).first().click();
        return element(by.css('div[class*="mod-error"][aria-live*="polite"]')).getText();
    }
}