
var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");

When("The user selects {string} checkbox", async function(string) {
  await elementLocatorFunctions.clickElementByXpath(
    "//span[contains(@class, 'mat-checkbox-label') and text() = '" +
      string +
      "']"
  );
});
