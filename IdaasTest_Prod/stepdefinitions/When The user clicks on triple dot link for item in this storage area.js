
var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");

When(
  "The user clicks on triple dot link for item in this storage area",
  async function() {
    await elementLocatorFunctions.clickElementByXpath(
      "//button[@class='mat-icon-button']"
    );
  }
);
