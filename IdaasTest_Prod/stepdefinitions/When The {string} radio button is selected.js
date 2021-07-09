//Use this step definition to click ona radio button

var elementLocatorFunctions = require('../pages/elementLocatorFunctions.js');

When('The {string} radio button is selected', async function(string) {
    await elementLocatorFunctions.clickElementByXpath('//span[contains(text(),\'' + string + '\')]');
})