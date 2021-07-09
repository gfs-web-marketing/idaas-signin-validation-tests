// Use this step definition to test that page is being directed to desired url

const { assert } = require("chai");
var { browser } = require("protractor");
var until = protractor.ExpectedConditions;

Then("The user should be redirected to {string}", async function(expected) {
  switch (expected) {
    case "https://wwwsit.gfs.com/en-us":
      {
      await browser.driver.wait(
        until.presenceOf(element(by.xpath('//a[@class="sign-in-button"]'))),
        60000,
        "Element taking too long to appear in the DOM"
      );
      await browser
        .element(by.xpath('//a[@class="sign-in-button"]'))
        .getText()
        .then(async function(actual) {
          console.log(actual);
          assert.equal(actual, "Sign In");
        });
      }
      break;
    default:
      {
      await browser.waitForAngularEnabled(false);
      await browser.sleep(10000);
      await browser.getTitle().then(async function(actual) {
        console.log("title is: "+actual);
        await browser.waitForAngularEnabled(false);
      })

      await browser.getCurrentUrl().then(async function(actual) {
        console.log("actual url is: "+actual);
        assert.include(actual, expected);
        await browser.waitForAngularEnabled(false);
      })
    }
  }
});
