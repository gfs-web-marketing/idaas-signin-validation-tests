var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var { browser } = require("protractor");

When("The user clicks on {string} link", async function (string) {
  switch (string) {
    case "selected-customer-unit":
      await elementLocatorFunctions.clickElementByXpath(
        '/html/body/app-root/app-header/div/div[1]/div/div[2]/gfs-customer-unit-selector/a/div/div'
      );
      break;

    case "Customer Location Selector":
      await elementLocatorFunctions.clickElementByXpath(
        '//*[@id="header-cont"]/div[1]/div/div[2]/gfs-customer-unit-selector/a'
      );
      break;

    case "Back Arrow":
      await elementLocatorFunctions
        .clickElementByXpath(
          '//*[@class="back-icon"]'
          //'//button[starts-with(@class,"back-arrow-button")]'
        )
        .then(async function (actual) { });
      break;
    case "Language Toggle":
      try {
        console.log("in try");
        await elementLocatorFunctions.clickElementByXpath(
          '//button[@id="language-select"]'
        );
      } catch {
        console.log("in catch");
        await elementLocatorFunctions.clickElementByXpath(
          "//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']"
        );
        await elementLocatorFunctions.clickElementByXpath(
          '//button[@id="language-select"]'
        );
      }
      break;
    case "Add Item":
      await browser.waitForAngular();
      await elementLocatorFunctions
        .getTextByXpath("//following-sibling::cdk-virtual-scroll-viewport/div[1]/div[1]/gfs-add-item-card/div/mat-grid-list/div/mat-grid-tile/figure/div[2]/div[1]/div") //get item title
        .then(async function (result) {
          ItemDesc = result;
        });

      await elementLocatorFunctions
        .getTextByXpath("//following-sibling::cdk-virtual-scroll-viewport/div[1]/div[1]/gfs-add-item-card/div/mat-grid-list/div/mat-grid-tile/figure/div[2]/div[1]/div[2]") // get item-details
        .then(async function (result) {
          ItemDetails = result;
        });

      await elementLocatorFunctions
        .getTextByXpath("//div[contains(@class, 'case-price')]")
        .then(async function (result) {
          ItemCasePrice = result;
        });

      await elementLocatorFunctions
        .getTextByXpath("//div[contains(@class, 'unit-price')]")
        .then(async function (result) {
          ItemUnitPrice = result;
        });

      FinalItemDetails = global.ItemDetails;
      ItemnumSubString = FinalItemDetails.substring(2, 8);
      ItemCasePrice = global.ItemCasePrice;
      ItemUnitPrice = global.ItemUnitPrice;
      console.log("Itemnum of item added is " + global.ItemnumSubString);
      console.log("Desc of item added is " + global.ItemDesc);
      console.log("Details of item added is " + global.ItemDetails);
      console.log("Case price of item added is " + global.ItemCasePrice);
      console.log("Unit price of item added is " + global.ItemUnitPrice);
      await elementLocatorFunctions.clickElementByXpath(
        "//span[contains(@class, 'add-item-button-label') and text() = 'Add Item']"
      );
      await browser.waitForAngular();
      break;

    case "overlay backdrop":
      {
        await elementLocatorFunctions.clickElementByXpath(
          "//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']"
        );
        await browser.waitForAngular();
        break;
      }
        case "Non GFS Items":
      await elementLocatorFunctions.clickElementByXpath(
        "//div[contains(text(),'Non-GFS Items')]"); 
        await browser.waitForAngular();
        break; 

    default:
      await elementLocatorFunctions.clickElementByXpath(
        "//*[contains(text(),'" + string + "')]"
      );
      await browser.waitForAngular();
      if (string == "Back to Inventory Counts") {
        await console.log("waiting for homepage");
        await browser.sleep(4000);
      }
  }
});