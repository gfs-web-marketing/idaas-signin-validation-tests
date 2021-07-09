var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var { browser } = require("protractor");

When("The user hits {string} button on the modal", async function (string) {
  switch (string) {
    case "Done":
      console.log("Button to be clicked: " + string);
      await elementLocatorFunctions.clickElementById("add-item-done-button");
      break;
    default:
      await console.log("Button to be clicked: " + string);
      await elementLocatorFunctions.clickElementBypartialButtonText(string);
      await browser.sleep(1000);
  }
});
