// Use this step definition for dropdown lists using formcontrolname
//ex:  The user selects "AutCat4" from "categorySelect" drop down list

var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var { browser } = require("protractor");

When(
  "The user selects {string} option from {string} drop down list",
  async function (string1, string2) {
    switch (string2) {
      case "selected-customer-unit":
        await elementLocatorFunctions.clickElementById(string2);
        await elementLocatorFunctions.clickElementByXpath(
          '//*[@class="selected-customer-unit"]'
        );
        break;
      case "storageArea":
      case "category": {
        if (
          global.scenarioName ===
          "Add Non GFS-Items to Worksheet Functionality, Add Custom StorageArea, Select Category, Edit Non-GFS" &&
          browser.browserName === "Safari" &&
          string2 == "category"
        ) {
          console.log("in safari block");
          await elementLocatorFunctions.clickElementByXpath(
            "//*[starts-with(@class,'category-input')]"
          );

          await elementLocatorFunctions.clickElementByXpath(
            "//span[contains(text(),'" + string1 + "')]//ancestor::span[@class]"
          );
        } else {
          await elementLocatorFunctions.clickElementByXpath(
            "//*[@formcontrolname='" + string2 + "']"
          );
          await elementLocatorFunctions.clickElementByXpath(
            "//span[contains(text(),'" + string1 + "')]//ancestor::span[@class]"
          );
        }
        break;
      }

      case "counting-unit-name-0":
      case "counting-unit-name-1":
      case "counting-unit-name-2":
      case "counting-unit-name-3": {
        browser.sleep(2000);
        await elementLocatorFunctions.clickElementById(string2);
        await elementLocatorFunctions.clickElementByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
          string1 +
          "')]"
        );
        break;
      }
      case "primaryCount":
        await elementLocatorFunctions.clickElementByXpath(
          "//input[@formcontrolname='" + string2 + "']"
        );
        await elementLocatorFunctions.clickElementByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
          string1 +
          "')]"
        );
        break;
      case "primaryUnit":
      case "secondaryUnit": {
        await elementLocatorFunctions.clickElementByXpath(
          "//*[@formcontrolname='" + string2 + "']"
        );
        await elementLocatorFunctions.clickElementByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
          string1 +
          "')]"
        );
        break;
      }
      case "secondaryCount":
        await elementLocatorFunctions.clickElementByXpath(
          "//input[@formcontrolname='" + string2 + "']"
        );
        await elementLocatorFunctions.clickElementByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
          string1 +
          "')]"
        );
        break;

      case "primaryPurchaseUnit":
        {
        await elementLocatorFunctions.clickElementByXpath(
          "//*[@id='counting-unit-parent-0']"
        );
        await elementLocatorFunctions.clickElementByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
          string1 +
          "')]"
        );}
        break;
        
      case "secondaryPurchaseUnit":
        await elementLocatorFunctions.clickElementByXpath(
          "//*[@id='counting-unit-parent-1']"
        );
        await elementLocatorFunctions.clickElementByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
          string1 +
          "')]"
        );
        break;

        case "Unit":
        case "Weight unit":
        case "Volume Unit":
          {
          await elementLocatorFunctions.clickElementByXpath(
            "//*[@ng-reflect-placeholder='" + string2 + "']"
          );
          await elementLocatorFunctions.clickElementByXpath(
            '//span[@class="mat-option-text"][contains(text(),\'' +
            string1 +
            "')]"
          );
          }
          break;

      default:
        browser.sleep(2000);
        await elementLocatorFunctions.clickElementByXpath(
          "//input[@formcontrolname='" + string2 + "']"
        );
        await elementLocatorFunctions.clickElementByXpath(
          '//span[@class="mat-option-text"][contains(text(),\'' +
          string1 +
          "')]"
        );
        break;
    }
  }
);
