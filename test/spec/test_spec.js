const { expect } = require('chai');

describe('test', () => {
    before(() => {
        browser.waitForAngularEnabled(false);
    })
    it('It should pass', () => {
        browser.get('https://www.kayak.com/')
    })
})