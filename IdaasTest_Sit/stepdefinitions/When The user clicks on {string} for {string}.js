// Use this stepdefinition for clicking Storage Area menus to display items within it
//Ex:   When The user clicks on "category-recipe-panel" for "Cooler Category"
var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
const { assert } = require("chai");

When("The user clicks on {string} for {string}", async function (
  string1,
  string2
) {
  await browser.sleep(5000);
  var concatstring = string1.concat("-", string2);
  await console.log(concatstring);
  await elementLocatorFunctions.clickElementByXpath(
    "//*[starts-with(@id,'" + concatstring + "')]"
  );
});
