var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var until = protractor.ExpectedConditions;
var { browser } = require("protractor");

When("The user hits {string} button", async function (string) {
  switch (string) {
    case "Leave Page":
      await browser.driver.wait(
        until.presenceOf(
          element(by.xpath('//span[contains(text(),"Leave Page")]'))
        ),
        60000,
        "Element taking too long to appear in the DOM"
      );
      await browser
        .element(by.xpath('//span[contains(text(),"Leave Page")]'))
        .click()
        .then(async function () {});
      break;
    case "Add Item":
      console.log("Button to be clicked: " + string);
      await elementLocatorFunctions.clickElementByXpath(
        '//button[starts-with(@class,"primary-button large-button")]'
      );
      break;
    default:
      await console.log("Button to be clicked: " + string);
      await elementLocatorFunctions.clickElementBypartialButtonText(string);
      await browser.sleep(7000);
      await browser.waitForAngular();
  }
});
