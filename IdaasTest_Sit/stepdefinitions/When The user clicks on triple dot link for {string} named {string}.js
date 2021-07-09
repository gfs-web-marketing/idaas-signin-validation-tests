const { assert } = require("chai");
var { browser } = require("protractor");
var until = protractor.ExpectedConditions;

When(
  "The user clicks on triple dot link for {string} named {string}",
  async function(string1, string2) {
    switch (string1) {
      case "worksheet":
        await browser.driver.wait(
          until.presenceOf(
            element(
              by.xpath(
                "//mat-cell[contains(.,'" +
                  string2 +
                  "')]/following-sibling::mat-cell/button[1]"
              )
            )
          ),
          60000,
          "Element taking too long to appear in the DOM"
        );

        await browser
          .element(
            by.xpath(
              "//mat-cell[contains(.,'" +
                string2 +
                "')]/following-sibling::mat-cell/button[1]"
            )
          )
          .click()
          .then(async function() {
            console.log("clicked on triple dot icon for worksheet " + string2);
          });
        break;
      case "Item":
        await browser.driver.wait(
          until.presenceOf(
            element(
              by.xpath(
                "//div[contains(text(),'" +
                  string2 +
                  "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//button"
              )
            )
          ),
          60000,
          "Element taking too long to appear in the DOM"
        );

        await browser
          .element(
            by.xpath(
              "//div[contains(text(),'" +
                string2 +
                "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//button"
            )
          )
          .click()
          .then(async function() {
            console.log("clicked on triple dot icon for Item " + string2);
          });
        break;

      default:
        console.log("no code for this step");
        assert.fail();
    }
  }
);
