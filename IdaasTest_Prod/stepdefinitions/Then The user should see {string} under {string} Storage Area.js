const { assert } = require("chai");
var { browser } = require("protractor");
var until = protractor.ExpectedConditions;

Then(
  "The user should see {string} under {string} Storage Area",
  async function (string1, string2) {
    await browser.driver.wait(
      until.presenceOf(
        element(
          by.xpath(
            "//mat-expansion-panel[contains(@id,'" +
              string2 +
              "')]//div[contains(@class,'mat-expansion-panel-content')]//div[contains(@class,'item-description-container')]"
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
            string2 +
            "')]//div[contains(@class,'mat-expansion-panel-content')]//div[contains(@class,'item-description-container')]"
        )
      )
      .getText()
      .then(async function (actual) {
        console.log("Actual text is: " + actual);
        console.log("Expected text is: " + string1);
        assert.include(actual, string1);
      });
  }
);
