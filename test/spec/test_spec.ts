import { TestPage } from '../pageObjects/testPage';
var chai = require('chai')
// import { expect } from 'chai'
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect;
const done = chai.done;

describe('Flights and Its form', () => {
    var page: TestPage;
    beforeEach(() => {
        page = new TestPage()
    })
    it('It should redirect to kayak', async () => {
        page.get();
        const result = await page.getCurrentUrl()
        expect(result).to.equal('https://www.kayak.com/')

    })
    it('Flights should be selected', async () => {
        page.getFlightElement();
        const url = await page.getCurrentUrl()
        const allElements = await page.checkVisibleFields();
        expect(url).to.equal('https://www.kayak.com/flights')
        expect(allElements).to.equal(null);
    })
    it('Switch to One way trip type mode', async () => {
        const result = await page.changeTripType('One-way');
        expect(result).to.equal('One-way');
        const allElements = await page.checkVisibleFields();
        expect(allElements).to.equal(null);
    })
    it('Switch to Multi-city trip type mode', async () => {
        const result = await page.changeTripType('Multi-city');
        expect(result).to.equal('Multi-city');
        const allElements = await page.checkVisibleFields();
        expect(allElements).to.equal(null);
    })
    it('Switch to Round trip type mode', async () => {
        const result = await page.changeTripType('Round-trip');
        expect(result).to.equal('Round-trip');
        const allElements = await page.checkVisibleFields();
        expect(allElements).to.equal(null);
    })
    it('Click adult multiple times', async () => {
        const result = await page.clickElementMultipleTimes();
        expect(result).to.equal('Searches cannot have more than 9 adults')
    })
})