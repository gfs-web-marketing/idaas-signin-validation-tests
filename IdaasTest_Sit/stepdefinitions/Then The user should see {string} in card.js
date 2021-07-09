// Use this step definition for validating cards within headers
//EX: recipe/Item cards within Category headers/Storage Area headers
// The user should see "test recipe" in card

var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
const { assert } = require("chai");
var { browser } = require("protractor");

Then("The user should see {string} in {string} card", async function(expected, string2) {
  switch (string2) {
    case "Freezer":
      await browser.driver.sleep(5000);
      await console.log("expected value is: " + global.ItemDesc);
      await console.log("expected value is: " + global.ItemDetails);
      FinalItemDesc = global.ItemDesc;
      var ItemDescSubString = FinalItemDesc.substring(0, 45);
      FinalItemDetails = global.ItemDetails;
      await elementLocatorFunctions
        .getTextByXpath(
          "//*[contains(@id, 'storage-area-item-panel-Freezer')]//div/div/app-storage-area-card/div/div[2]/mat-grid-list/div/mat-grid-tile[1]/figure/div[4]"
        )
        .then(async function(actual) {
          await console.log("actual value is: " + actual);
          await assert.include(actual, ItemDescSubString);
          await assert.include(actual, FinalItemDetails);
        });
      break;

      case "zAutoStorageArea":
        await browser.driver.sleep(5000);
        await console.log("expected value is: " + global.ItemDesc);
        await console.log("expected value is: " + global.ItemDetails);
        FinalItemDesc = global.ItemDesc;
        var ItemDescSubString = FinalItemDesc.substring(0, 45);
        FinalItemDetails = global.ItemDetails;
        await elementLocatorFunctions
          .getTextByXpath(
            "//*[contains(@id, 'storage-area-item-panel-zAutoStorageArea')]//div/div/app-storage-area-card/div/div[2]/mat-grid-list/div/mat-grid-tile[1]/figure/div[4]"
          )
          .then(async function(actual) {
            await console.log("actual value is: " + actual);
            await assert.include(actual, ItemDescSubString);
            await assert.include(actual, FinalItemDetails);
          });
        break;


    default:
      await elementLocatorFunctions.clickElementByXpath(
        "//*[contains(text(),'" + string + "')]"
      );
  }
});
