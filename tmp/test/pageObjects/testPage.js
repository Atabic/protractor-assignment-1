"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPage = void 0;
const protractor_1 = require("protractor");
class TestPage {
    get() {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://www.kayak.com');
    }
    getCurrentUrl() {
        protractor_1.browser.waitForAngularEnabled(false);
        return protractor_1.browser.getCurrentUrl();
    }
    getFlightElement() {
        protractor_1.browser.waitForAngularEnabled(false);
        return protractor_1.element.all(protractor_1.by.css('.hsCY-menu-item-title hsCY-active')).getText();
        // $$('.hsCY-menu-item-title hsCY-active').getText();
    }
}
exports.TestPage = TestPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L3BhZ2VPYmplY3RzL3Rlc3RQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLFFBQVE7SUFDakIsR0FBRztRQUNDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsYUFBYTtRQUNULG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsT0FBTyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxnQkFBZ0I7UUFDWixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUUscURBQXFEO0lBQ3pELENBQUM7Q0FDSjtBQWRELDRCQWNDIn0=