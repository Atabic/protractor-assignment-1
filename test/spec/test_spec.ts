import { TestPage } from '../pageObjects/testPage';
var chai = require('chai')
// import { expect } from 'chai'
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect;

describe('test', () => {
    var page:TestPage;
    beforeEach(()=>{
        page = new TestPage()
    })
    it('It should redirect to kayak', async () => {
        page.get();
        await expect(page.getCurrentUrl()).to.equal('https://www.kayak.com')
    })
    it('Flights should be selected',async ()=> {
        let someValue = page.getFlightElement();
        console.log(someValue);
        await expect(page.getFlightElement()).to.equal('Flights')
    })
})