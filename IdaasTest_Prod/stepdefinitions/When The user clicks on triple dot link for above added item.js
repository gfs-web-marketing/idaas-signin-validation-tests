var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");

When(
  "The user clicks on triple dot link for above added item",
  async function() {
    await elementLocatorFunctions.clickElementByXpath(
      "//div[contains(text(),'" +
        global.ItemnumSubString +
        "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//button"
    );
  }
);
