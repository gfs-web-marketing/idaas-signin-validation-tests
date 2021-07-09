//Use this stepdefinition for formcontrol fields, anywhere user inputs in formcontrol field

var { browser } = require("protractor");
var until = protractor.ExpectedConditions;

When(
  "The user enters {string} value in {string} field for {string}",
  async function(string1, string2, string3) {
    switch (string2) {
      case "primaryCount":
        await browser.driver.wait(
          until.presenceOf(
            element(
              by.xpath(
                "//mat-grid-list[contains(@id,'" +
                  string3 +
                  "')]//following-sibling::mat-grid-tile//div//input"
              )
            )
          ),
          60000,
          "Element taking too long to appear in the DOM"
        );

        for (var i = 0; i <= 4; i++) {
          await browser
            .element(
              by.xpath(
                "//mat-grid-list[contains(@id,'" +
                  string3 +
                  "')]//following-sibling::mat-grid-tile//div//input"
              )
            )
            .sendKeys(protractor.Key.BACK_SPACE);
        }

        if (string1 != "null") {
          await browser
            .element(
              by.xpath(
                "//mat-grid-list[contains(@id,'" +
                  string3 +
                  "')]//following-sibling::mat-grid-tile//div//input"
              )
            )
            .sendKeys(string1)
            .then(async function() {
              console.log(
                "entered " +
                  string1 +
                  " value in " +
                  string2 +
                  " field for " +
                  string3
              );
            });
        } else {
          console.log("cleared the " + string2);
        }
        break;

      case "secondaryCount":
        await browser.driver.wait(
          until.presenceOf(
            element(
              by.xpath(
                "//mat-grid-list[contains(@id,'" +
                  string3 +
                  "')]//following-sibling::mat-grid-tile//div[2]//input"
              )
            )
          ),
          60000,
          "Element taking too long to appear in the DOM"
        );

        for (var i = 0; i <= 4; i++) {
          await browser
            .element(
              by.xpath(
                "//mat-grid-list[contains(@id,'" +
                  string3 +
                  "')]//following-sibling::mat-grid-tile//div[2]//input"
              )
            )
            .sendKeys(protractor.Key.BACK_SPACE);
        }
        if (string1 != "null") {
          await browser
            .element(
              by.xpath(
                "//mat-grid-list[contains(@id,'" +
                  string3 +
                  "')]//following-sibling::mat-grid-tile//div[2]//input"
              )
            )
            .sendKeys(string1)
            .then(async function() {
              console.log(
                "entered " +
                  string1 +
                  " value in " +
                  string2 +
                  " field for " +
                  string3
              );
            });
        } else {
          console.log("cleared the " + string2);
        }
        break;

      default:
    }
  }
);
