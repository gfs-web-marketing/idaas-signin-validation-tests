
var elementLocatorFunctions = require('../pages/elementLocatorFunctions.js');
var { browser } = require('protractor');

When('The user enters {string}, {string} as username and password and hits submit button', async function(string1, string2) {
    await elementLocatorFunctions.enterUsernamePasswordById('username', 'password', string1, string2);
    await browser.element(by.xpath('//input[@name="submit"]')).click().then(async function(actual) {})
})