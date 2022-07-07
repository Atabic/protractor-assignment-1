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
const done = chai.done;
describe('test', () => {
    var page;
    beforeEach(() => {
        page = new testPage_1.TestPage();
    });
    it('It should redirect to kayak', () => __awaiter(void 0, void 0, void 0, function* () {
        page.get();
        const result = yield page.getCurrentUrl();
        expect(result).to.equal('https://www.kayak.com/');
    }));
    it('Flights should be selected', () => __awaiter(void 0, void 0, void 0, function* () {
        page.getFlightElement();
        const url = yield page.getCurrentUrl();
        const allElements = yield page.checkVisibleFields();
        expect(url).to.equal('https://www.kayak.com/flights');
        expect(allElements).to.equal(null);
    }));
    it('Switch to One way trip type mode', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield page.changeTripType('One-way');
        expect(result).to.equal('One-way');
        const allElements = yield page.checkVisibleFields();
        expect(allElements).to.equal(null);
    }));
    it('Switch to Multi-city trip type mode', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield page.changeTripType('Multi-city');
        expect(result).to.equal('Multi-city');
        const allElements = yield page.checkVisibleFields();
        expect(allElements).to.equal(null);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9zcGVjL3Rlc3Rfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNEQUFtRDtBQUNuRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUIsZ0NBQWdDO0FBQ2hDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBRXZCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ2xCLElBQUksSUFBYyxDQUFDO0lBQ25CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDWixJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7SUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUyxFQUFFO1FBQ3pDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFFckQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDdEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNwRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1FBQ3JELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBUyxFQUFFO1FBQzlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO1FBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9