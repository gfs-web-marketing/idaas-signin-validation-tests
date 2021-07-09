// Use this step definition for dropdown lists using formcontrolname
//ex:  The user selects "AutCat4" from "categorySelect" drop down list

var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
const { assert } = require("chai");
var { browser } = require("protractor");

When("The user selects {string} drop down list", async function(string2) {
  switch (string2) {
    case "storageArea":
      await elementLocatorFunctions.clickElementByXpath(
        "//*[@formcontrolname='" + string2 + "']"
      );
      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;
    case "category":
      await elementLocatorFunctions.clickElementByXpath(
        "//*[@formcontrolname='" + string2 + "']"
      );
      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;
    case "primaryCount":
      await elementLocatorFunctions.clickElementByXpath(
        "//input[@formcontrolname='" + string2 + "']"
      );
      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;
    case "primaryUnit":
      await elementLocatorFunctions.clickElementByXpath(
        "//*[@fieldname='counting-unit-name-0']"
      );

      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;
    case "secondaryUnit":
      await elementLocatorFunctions.clickElementByXpath(
        "//*[@fieldname='counting-unit-name-1']"
      );
      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;
    case "secondaryCount":
      await elementLocatorFunctions.clickElementByXpath(
        "//input[@formcontrolname='" + string2 + "']"
      );
      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;

    case "primaryPurchaseUnit":
      await elementLocatorFunctions.clickElementByXpath(
        "//*[@id='counting-unit-parent-0']"
      );
      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;
    case "secondaryPurchaseUnit":
      await elementLocatorFunctions.clickElementByXpath(
        "//*[@id='counting-unit-parent-1']"
      );
      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;

    default:
      browser.sleep(2000);
      await elementLocatorFunctions.clickElementByXpath(
        "//input[@formcontrolname='" + string2 + "']"
      );
      try {
        await elementLocatorFunctions.getTextByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
        );
        console.log(String1 + " option found in the drop down list");
      } catch {
        console.log(String1 + " option not found in the drop down list");
        assert.fail();
      }
      break;
  }
});
