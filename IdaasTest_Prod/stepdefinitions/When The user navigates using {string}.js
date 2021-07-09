const { assert } = require('chai');
var { browser } = require('protractor');

When('The user navigates using {string}', async function(string) {

    switch (string) {
        case "browser back button":
            await browser.driver.navigate().back().then(function() {});
            break;
        default:
            console.log(string + ' not found');
            assert(false, 'No code for ' + '\'' + string + '\'' + ' in \'When\' condition')
    }
})