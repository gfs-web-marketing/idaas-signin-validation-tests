//Use this step definition to validate that user should see specifc data(storage area/category) in the sidenav panel

var elementLocatorFunctions = require('../pages/elementLocatorFunctions.js');
const { assert } = require('chai');
var { browser } = require('protractor');

Then('The user should see {string} on sidenav panel', async function(expected) {
    await elementLocatorFunctions.getTextById('storage-area-list').then(function(actual) {
        assert.include(actual, expected)
    })
})