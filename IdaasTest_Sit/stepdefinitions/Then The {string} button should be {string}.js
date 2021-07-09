//Use this step definition to test if the button is enabled or disabled

var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
const { assert } = require("chai");
var until = protractor.ExpectedConditions;
var { browser } = require("protractor");

Then("The {string} button should be {string}", async function(string, string2) {
  switch (string2) {
    case "enabled":
      await browser.driver.wait(
        until.presenceOf(
          element(by.xpath("//*[contains(text(),'" + string + "')]"))
        ),
        60000,
        "Element taking too long to appear in the DOM"
      );
      await browser
        .element(by.xpath("//*[contains(text(),'" + string + "')]"))
        .getAttribute("disabled")
        .then(async function(value) {
          console.log("value is " + value);
          disabledValue1 = value;
        });
      console.log("disabledValue is: " + global.disabledValue1);
      if (disabledValue1 == true) {
        console.log("The " + string + " button is not " + string2);
        assert.fail();
      } else if (global.disabledValue1 != true) {
        console.log("The " + string + " button is " + string2);
      }
      break;

    case "disabled":
      if (string == "Add Item") {
        await browser.driver.wait(
          until.presenceOf(
            element(
              by.xpath(
                "//button[starts-with(@class,'primary-button large-button')]"
              )
            )
          ),
          60000,
          "Element taking too long to appear in the DOM"
        );

        await browser
          .element(
            by.xpath(
              "//button[starts-with(@class,'primary-button large-button')]"
            )
          )
          .getAttribute("disabled")
          .then(async function(value) {
            console.log("value is " + value);
            disabledValue = value;
          });

        console.log("disabledValue is: " + global.disabledValue);
        if (global.disabledValue) {
          console.log("The " + string + " button is " + string2);
        } else {
          console.log("The " + string + " button is not " + string2);
          assert.fail();
        }
      } else if (string == "Done") {
        await browser.driver.wait(
          until.presenceOf(element(by.id("close-button"))),
          60000,
          "Element taking too long to appear in the DOM"
        );

        await browser
          .element(by.id("close-button"))
          .getAttribute("disabled")
          .then(async function(value) {
            console.log("value is " + value);
            disabledValue = value;
          });

        console.log("disabledValue is: " + global.disabledValue);
        if (global.disabledValue) {
          console.log("The " + string + " button is " + string2);
        } else {
          console.log("The " + string + " button is not " + string2);
          assert.fail();
        }
      } else {
        await browser.driver.wait(
          until.presenceOf(
            element(by.xpath("//*[contains(text(),'" + string + "')]"))
          ),
          60000,
          "Element taking too long to appear in the DOM"
        );

        await browser
          .element(by.xpath("//*[contains(text(),'" + string + "')]"))
          .getAttribute("disabled")
          .then(async function(value) {
            console.log("value is " + value);
            disabledValue = value;
          });

        console.log("disabledValue is: " + global.disabledValue);
        if (global.disabledValue) {
          console.log("The " + string + " button is " + string2);
        } else {
          console.log("The " + string + " button is not " + string2);
          assert.fail();
        }
      }
      break;
    default:
      await elementLocatorFunctions.clickElementBypartialButtonText(string);
  }
});
