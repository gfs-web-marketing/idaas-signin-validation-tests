//Use this stepdefinition for formcontrol fields, anywhere user inputs in formcontrol field

var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var { browser } = require("protractor");

Then("The user should see {string} for {string} item on the card", async function (
  string1,
  string2
) {
  switch (string1) {
    case "Chain Item":
      await browser.driver.sleep(5000);
      await console.log("expected value is: " +string1);
      await elementLocatorFunctions
        .getTextByXpath(
          "//*[@id='custom-item-"+string2+"']/div/mat-grid-tile[4]"
        )
        .then(async function(actual) {
          await console.log("actual value is: " + actual);
          await assert.equal(actual, string1);
        });
      break;
    default:
      console.log('In default')
  }
});
