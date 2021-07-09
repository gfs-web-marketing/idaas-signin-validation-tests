//Use this step definition to validate that user should not see specifc data(storage area/category) in the sidenav panel

const { assert } = require("chai");
var { browser } = require("protractor");

Then("The user should not see {string} on page", async function (expected) {
  await browser.sleep(8000);
  await browser.driver.getPageSource().then(async function (actual) {
    await assert.notInclude(actual, expected);
  });
});
