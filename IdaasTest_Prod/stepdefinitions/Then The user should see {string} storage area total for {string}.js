
const { assert } = require("chai");
var { browser } = require("protractor");
var until = protractor.ExpectedConditions;

Then(
  "The user should see {string} storage area total for {string}",
  async function(string1, string2) {
    var concatstring = "storage-area-item-panel".concat("-", string2);
    await browser.driver.wait(
      until.presenceOf(
        element(
          by.xpath(
            "//mat-expansion-panel[contains(@id,'" +
              concatstring +
              "')]//mat-expansion-panel-header//span//mat-panel-title//div[2]"
          )
        )
      ),
      60000,
      "Element taking too long to appear in the DOM"
    );

    await browser
      .element(
        by.xpath(
          "//mat-expansion-panel[contains(@id,'" +
            concatstring +
            "')]//mat-expansion-panel-header//span//mat-panel-title//div[2]"
        )
      )
      .getText()
      .then(async function(actual) {
        console.log("Actual text is: " + actual);
        console.log("Expected text is: " + string1);
        assert.include(actual, string1);
      });
  }
);
