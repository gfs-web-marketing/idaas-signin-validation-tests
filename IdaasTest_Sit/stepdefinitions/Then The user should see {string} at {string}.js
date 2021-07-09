
var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
const { assert } = require("chai");
var { browser } = require("protractor");
var until = protractor.ExpectedConditions;
Then("The user should see {string} at {string}", async function (
  expected,
  string2
) {
  switch (string2) {
    case "Item Name (required)":
    case "Vendor (required)":
    case "Item Number":
    case "Category":
    case "Purchase Unit":
    case "Price":
    case "Net Weight":
    case "Unit":
    case "Weight Unit":
    case 'Number of "Kilogram (kg)"':
    case "Volume Unit":
    case 'Number of "Liter (l)"':
     {
      await elementLocatorFunctions
        .getTextByXpath("//*[contains(@data-placeholder,'" + string2 + "')]")
        .then(async function (actual) {
          await console.log("Actual text is: " + actual);
          await console.log("Expected text is: " + expected);
          await assert.include(actual, expected);
        });

    }
    break;
    case "JASPER INN ALPINE RESORT": {
      await elementLocatorFunctions
        .getTextByXpath(
          "//a[@id='customer-unit-83035']//div//div")
        .then(async function (actual) {
          await console.log(actual);
          await assert.include(actual, expected);
        });

      break;
    }
    case "1st row": {
      await browser.sleep(2000);
      await elementLocatorFunctions
        .getTextByXpath("//body//mat-row[1]")
        .then(async function (actual) {
          await console.log(actual);
          await assert.include(actual, expected);
        });
      break;
    }

    case "item count": 
    {
      await browser.sleep(2000);
      await elementLocatorFunctions
        .getTextByXpath("//div[starts-with(@class,'item-count')]")
        .then(async function (actual) {
          await console.log(actual);
          await assert.include(actual, expected);
        });
      }
      break;
    
    case "counting-unit-qty-0":
    case "counting-unit-qty-1":
    case "counting-unit-qty-2":
    case "counting-unit-qty-3":
    case "counting-unit-qty-4":
    case "counting-unit-name-0":
    case "counting-unit-name-1":
    case "counting-unit-name-2":
    case "counting-unit-name-3":
    case "counting-unit-name-4": {
      await browser.driver.wait(
        until.presenceOf(
          element(by.xpath("//*[@id='" + string2 + "']")).getAttribute("value"),
          120000,
          "Element taking too long to appear in the DOM"
        )
      );

      await browser
        .element(by.xpath("//*[@id='" + string2 + "']"))
        .getAttribute("value")
        .then(async function (value) {
          attributevalue = value;
          await console.log("Actual text is: " + attributevalue);
          await console.log("Expected text inside is: " + expected);
          await assert.equal(attributevalue, expected); 
/*           if(attributevalue===expected){
            console.log('after assert')
          } else{
            assert.fail()
          }       */   
        });
      break;
    }

    case "itemName":
    case "itemNumber":
    case "purchasePrice":
    case "unitQty": {
      await browser.driver.wait(
        until.presenceOf(
          element(
            by.xpath("//*[@formcontrolname='" + string2 + "']")
          ).getAttribute("value"),
          120000,
          "Element taking too long to appear in the DOM"
        )
      );

      await browser
        .element(by.xpath("//*[@formcontrolname='" + string2 + "']"))
        .getAttribute("value")
        .then(async function (value) {
          attributevalue = value;
          await console.log("Actual text is: " + attributevalue);
          await console.log("Expected text is: " + expected);
          await assert.include(attributevalue, expected);
        });
      break;
    }
    case "supplier":
    case "storageArea":
    case "category": {
      await browser.driver.wait(
        until.presenceOf(
          element(
            by.xpath("//*[@formcontrolname='" + string2 + "']//child::input[1]")
          ).getAttribute("value"),
          120000,
          "Element taking too long to appear in the DOM"
        )
      );

      await browser
        .element(
          by.xpath("//*[@formcontrolname='" + string2 + "']//child::input[1]")
        )
        .getAttribute("value")
        .then(async function (value) {
          attributevalue = value;
          await console.log("Actual text is: " + attributevalue);
          await console.log("Expected text is: " + expected);
          await assert.include(attributevalue, expected);
        });
      break;
    }

    default:
      await browser.sleep(2000);
      if (
        string2 ==
          "mat-cell cdk-cell summary-cell cdk-column-Status mat-column-Status ng-star-inserted" &&
        expected == "Done"
      ) {
        await browser.driver.navigate().refresh();
        await browser.waitForAngular();
      }

      await elementLocatorFunctions
        .getTextByXpath("//*[contains(@class,'" + string2 + "')]")
        .then(async function (actual) {
          await console.log("Actual text is: " + actual);
          await console.log("Expected text is: " + expected);
          await assert.include(actual, expected);
        });
      break;
  }
});
