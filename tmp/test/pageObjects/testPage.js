"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPage = void 0;
const protractor_1 = require("protractor");
class TestPage {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.waitForAngularEnabled(false);
            protractor_1.browser.get('https://www.kayak.com');
        });
    }
    getCurrentUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            // browser.waitForAngularEnabled(false);
            return protractor_1.browser.getCurrentUrl();
        });
    }
    getFlightElement() {
        return __awaiter(this, void 0, void 0, function* () {
            let FlightElement = (0, protractor_1.element)(protractor_1.by.css('a[aria-label*="flights"]'));
            protractor_1.browser.waitForAngularEnabled(false);
            FlightElement.click();
        });
    }
    checkVisibleFields() {
        return __awaiter(this, void 0, void 0, function* () {
            let form = protractor_1.element.all(protractor_1.by.css('div[class*="formFieldOutline"]')).each((ele, index) => {
                if (!ele.isDisplayed()) {
                    Promise.reject();
                }
            });
            return form;
        });
    }
    changeTripType(value) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.waitForAngularEnabled(false);
            let tripType = (0, protractor_1.element)(protractor_1.by.css('div.wIIH[role*="button"][tabindex*="0"]'));
            tripType.click();
            (0, protractor_1.element)(protractor_1.by.css('li[aria-label="' + value + '"]')).click();
            return tripType.getText();
        });
    }
    clickElementMultipleTimes() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.waitForAngularEnabled(false);
            const adult = protractor_1.element.all(protractor_1.by.css('div[class*="pres-default"][role*="button"][tabindex*="0"]')).filter((ele) => __awaiter(this, void 0, void 0, function* () {
                if ((yield ele.getText()) === '1 adult') {
                    return ele;
                }
            }));
            adult.click();
            const incrementButton = protractor_1.element.all(protractor_1.by.css('button[tabindex*="-1"][aria-label*="Decrement"][aria-disabled*="false"]'));
            // const inputField = element(by.css('input[tabindex*="0"][role*="slider"][aria-valuenow*="9"][aria-valuemin*="0"]')).getText();
            for (let i = 0; i < 9; i++) {
                if (i === 0) {
                    incrementButton.first().click();
                }
                else {
                    incrementButton.get(1).click();
                }
            }
            protractor_1.element.all(protractor_1.by.css('button.bCGf-mod-button-disabled[tabindex*="-1"][aria-label*="Decrement"][aria-disabled*="true"]')).first().click();
            return (0, protractor_1.element)(protractor_1.by.css('div[class*="mod-error"][aria-live*="polite"]')).getText();
        });
    }
}
exports.TestPage = TestPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L3BhZ2VPYmplY3RzL3Rlc3RQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLFFBQVE7SUFDWCxHQUFHOztZQUNMLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFDSyxhQUFhOztZQUNmLHdDQUF3QztZQUN4QyxPQUFPLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBQ0ssZ0JBQWdCOztZQUNsQixJQUFJLGFBQWEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUE7WUFDL0Qsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDekIsQ0FBQztLQUFBO0lBQ0ssa0JBQWtCOztZQUNwQixJQUFJLElBQUksR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLEVBQUU7Z0JBQ2hGLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDcEI7WUFDTCxDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUNLLGNBQWMsQ0FBRSxLQUFZOztZQUM5QixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQTtZQUN6RSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxHQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0QsT0FBTyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsQ0FBQztLQUFBO0lBQ0sseUJBQXlCOztZQUMzQixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sS0FBSyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFPLEdBQUcsRUFBRSxFQUFFO2dCQUNoSCxJQUFHLENBQUEsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQUssU0FBUyxFQUFFO29CQUNsQyxPQUFPLEdBQUcsQ0FBQztpQkFDZDtZQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7WUFDRixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZCxNQUFNLGVBQWUsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlFQUF5RSxDQUFDLENBQUMsQ0FBQTtZQUN0SCxnSUFBZ0k7WUFDaEksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNULGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0gsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbEM7YUFDSjtZQUNELG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUdBQWlHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZJLE9BQU8sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JGLENBQUM7S0FBQTtDQUNKO0FBakRELDRCQWlEQyJ9