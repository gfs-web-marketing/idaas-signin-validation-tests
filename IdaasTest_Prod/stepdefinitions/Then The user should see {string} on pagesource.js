
const { assert } = require('chai');
var { browser } = require('protractor');

Then('The user should see {string} on pagesource', async function(expected) {
    await browser.sleep(8000)
    console.log("getting text from page")
    browser.driver.getPageSource().then(async function(actual) {
        await assert.include(actual, expected)
    })
})