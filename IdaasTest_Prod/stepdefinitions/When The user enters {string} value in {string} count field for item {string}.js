//Use this stepdefinition for formcontrol fields, anywhere user inputs in formcontrol field


var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var { browser } = require("protractor");
var until = protractor.ExpectedConditions;

When(
  "The user enters {string} value in {string} count field for item {string}",
  async function (string1, string2, string3) {
    switch (string1) {
      case "null":
        if (string2 == "primary") {
          if (browser.browserName === "chrome") {
            await elementLocatorFunctions.clickElementByXpath(
              "//div[contains(text(),'" +
                string3 +
                "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input"
            );
            await browser.sleep(3000);

            await browser
              .actions()
              .keyDown(protractor.Key.CONTROL)
              .sendKeys("a")
              .perform();
            await browser
              .element(
                by.xpath(
                  "//div[contains(text(),'" +
                    string3 +
                    "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input"
                )
              )
              .sendKeys(protractor.Key.BACK_SPACE);

            await browser
              .element(
                by.xpath(
                  "//div[contains(text(),'" +
                    string3 +
                    "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input"
                )
              )
              .sendKeys(
                protractor.Key.SHIFT,
                protractor.Key.END,
                protractor.Key.BACK_SPACE
              );
          } else {
            await browser.driver.wait(
              until.presenceOf(
                element(
                  by.xpath(
                    "//div[contains(text(),'" +
                      string3 +
                      "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input"
                  )
                )
              ),
              120000,
              "Element taking too long to appear in the DOM"
            );

            await browser
              .element(
                by.xpath(
                  "//div[contains(text(),'" +
                    string3 +
                    "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input"
                )
              )
              .getAttribute("value")
              .then(async function (value) {
                attributevalue = value;
                console.log("Attribute value is: " + attributevalue);
              });
            console.log("Attribute length is: " + attributevalue.length);

            if (attributevalue == "") {
              console.log("in null");
            } else {
              console.log("outside null attribute value: " + attributevalue);
              for (var i = 0; i <= attributevalue.length; i++) {
                await browser
                  .element(
                    by.xpath(
                      "//div[contains(text(),'" +
                        string3 +
                        "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input"
                    )
                  )
                  .sendKeys(protractor.Key.BACK_SPACE);
              }

              for (var i = 0; i <= attributevalue.length; i++) {
                await browser
                  .element(
                    by.xpath(
                      "//div[contains(text(),'" +
                        string3 +
                        "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input"
                    )
                  )
                  .sendKeys(
                    protractor.Key.SHIFT,
                    protractor.Key.END,
                    protractor.Key.BACK_SPACE
                  );
              }
            }
          }
        } else if (string2 == "secondary") {
          if (browser.browserName === "chrome") {
            await elementLocatorFunctions.clickElementByXpath(
              "//div[contains(text(),'" +
                string3 +
                "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input"
            );
            await browser.sleep(3000);

            await browser
              .actions()
              .keyDown(protractor.Key.CONTROL)
              .sendKeys("a")
              .perform();
            await browser
              .element(
                by.xpath(
                  "//div[contains(text(),'" +
                    string3 +
                    "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input"
                )
              )
              .sendKeys(protractor.Key.BACK_SPACE);

            await browser
              .element(
                by.xpath(
                  "//div[contains(text(),'" +
                    string3 +
                    "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input"
                )
              )
              .sendKeys(
                protractor.Key.SHIFT,
                protractor.Key.END,
                protractor.Key.BACK_SPACE
              );
          } else {
            await browser.driver.wait(
              until.presenceOf(
                element(
                  by.xpath(
                    "//div[contains(text(),'" +
                      string3 +
                      "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input"
                  )
                )
              ),
              120000,
              "Element taking too long to appear in the DOM"
            );
            await browser
              .element(
                by.xpath(
                  "//div[contains(text(),'" +
                    string3 +
                    "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input"
                )
              )
              .getAttribute("value")
              .then(async function (value) {
                attributevalue = value;
                console.log("Attribute value is: " + attributevalue);
              });
            console.log("Attribute length is: " + attributevalue.length);

            if (attributevalue == "") {
              console.log("in null");
            } else {
              console.log("outside null attribute value: " + attributevalue);
              for (var i = 0; i <= attributevalue.length; i++) {
                await browser
                  .element(
                    by.xpath(
                      "//div[contains(text(),'" +
                        string3 +
                        "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input"
                    )
                  )
                  .sendKeys(protractor.Key.BACK_SPACE);
              }

              for (var i = 0; i <= attributevalue.length; i++) {
                await browser
                  .element(
                    by.xpath(
                      "//div[contains(text(),'" +
                        string3 +
                        "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input"
                    )
                  )
                  .sendKeys(
                    protractor.Key.SHIFT,
                    protractor.Key.END,
                    protractor.Key.BACK_SPACE
                  );
              }
            }
          }
        }

        break;
      default:
        await console.log("string2 is: " + string2);
        await console.log("string3 is: " + string3);
        if (string3 == "global.ItemnumSubString") {
          string3 = global.ItemnumSubString;
          console.log("global.ItemnumSubString is: " + string3);
          if (string2 == "primary") {
            console.log(
              "//div[contains(text()," +
                string3 +
                ")]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input"
            );
            await elementLocatorFunctions.enterTextByXpath(
              "//div[contains(text()," +
                string3 +
                ")]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input",
              string1
            );
            await browser.sleep(3000);
          } else if (string2 == "secondary") {
            await elementLocatorFunctions.enterTextByXpath(
              "//div[contains(text()," +
                string3 +
                ")]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input",
              string1
            );
            await browser.sleep(3000);
          }
        } else {
          if (string2 == "primary") {
            await elementLocatorFunctions.enterTextByXpath(
              "//div[contains(text(),'" +
                string3 +
                "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[1]//input",
              string1
            );
            await browser.sleep(3000);
          } else if (string2 == "secondary") {
            await elementLocatorFunctions.enterTextByXpath(
              "//div[contains(text(),'" +
                string3 +
                "')]//ancestor::figure//ancestor::mat-grid-tile//following-sibling::mat-grid-tile//figure//div//div[2]//input",
              string1
            );
            await browser.sleep(3000);
          }
        }
    }
  }
);
