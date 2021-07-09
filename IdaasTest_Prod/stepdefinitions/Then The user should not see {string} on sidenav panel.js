//Use this step definition to validate that user should not see specifc data(storage area/category) in the sidenav panel


var elementLocatorFunctions = require('../pages/elementLocatorFunctions.js');
const { assert } = require('chai');

Then('The user should not see {string} on sidenav panel', async function(expected) {
    await elementLocatorFunctions.getTextById('storage-area-list').then(function(actual) {
        assert.notInclude(actual, expected)
    })
})