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
const testPage_1 = require("../pageObjects/testPage");
var chai = require('chai');
// import { expect } from 'chai'
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
describe('test', () => {
    var page;
    beforeEach(() => {
        page = new testPage_1.TestPage();
    });
    it('It should redirect to kayak', () => __awaiter(void 0, void 0, void 0, function* () {
        page.get();
        yield expect(page.getCurrentUrl()).to.equal('https://www.kayak.com');
    }));
    it('Flights should be selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let someValue = page.getFlightElement();
        console.log(someValue);
        yield expect(page.getFlightElement()).to.equal('Flights');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9zcGVjL3Rlc3Rfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNEQUFtRDtBQUNuRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUIsZ0NBQWdDO0FBQ2hDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUNsQixJQUFJLElBQWEsQ0FBQztJQUNsQixVQUFVLENBQUMsR0FBRSxFQUFFO1FBQ1gsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO0lBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVMsRUFBRTtRQUN6QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDeEUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyw0QkFBNEIsRUFBQyxHQUFRLEVBQUU7UUFDdEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=