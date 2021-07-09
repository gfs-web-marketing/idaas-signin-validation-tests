
var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
const { assert, toUpperCase } = require("chai");
var { browser } = require("protractor");

Then("The user should see {string} on page", async function (expected) {
  switch (expected) {
      case "Created Date":
      await browser.driver.getPageSource().then(async function (actual) {
        await assert.include(
          actual,
          CREATED,
          "Assertion error on Created Date"
        );
      });

      break;
    default:
      await browser.waitForAngular();
      await elementLocatorFunctions
        .getTextByXpath("/html/body/div[3]/div/div[1]/div/div[2]/div/div[1]/div/div[2]/div[1]/ul/li[1]/a/div[2]")
        .then(async function (actual) {
          console.log("Actual text is: " + actual);
          console.log("Expected text is: " + expected);
          var actual1 = await actual.toUpperCase();
          var expected1 = await expected.toUpperCase();
          assert.include(actual1, expected1);
        });
      break;
  }
});
