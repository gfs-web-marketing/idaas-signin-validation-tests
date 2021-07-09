//Use this stepdefinition where user has to hover on icons and click on button

//Ex: When The user hovers and clicks on "AutoStrgArea001" "storage-area-list-edit-button"

var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var { browser } = require("protractor");
var until = protractor.ExpectedConditions;

When("The user hovers and clicks on {string} {string}", async function(
  string1,
  string2
) {
  var concatstring = string2.concat("-", string1);
  await console.log(concatstring);
  await browser.driver.wait(
    until.presenceOf(
      element(by.xpath("//*[starts-with(@id,'" + concatstring + "')]"))
    ),
    60000,
    "Element taking too long to appear in the DOM"
  );
  await browser
    .element(by.xpath("//*[starts-with(@id,'" + concatstring + "')]"))
    .getAttribute("id")
    .then(async function(hoverId) {
      hoverIdValue = hoverId;
    });
  await console.log(global.hoverIdValue);
  await browser.driver.wait(
    until.presenceOf(element(by.id(hoverIdValue))),
    60000,
    "Element taking too long to appear in the DOM"
  );
  await browser.driver
    .actions()
    .mouseMove(element(by.id(hoverIdValue)))
    .perform()
    .then(async function() {
      await console.log("hovering on element");
      await elementLocatorFunctions.clickElementById(global.hoverIdValue);
    });
});
