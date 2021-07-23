var elementLocatorFunctions = require("./elementLocatorFunctions.js");
var { browser } = require("protractor");
const { assert } = require("chai");
var until = protractor.ExpectedConditions;
var password = "IDAASTest9!";
var LandingPage = function () {
  this.goToHomepage = async function (username) {
    if (username=='EbzTest1234'){
      password="Recipe!1"
    } else{
      //DO NOTHING
    }
    if (global.env == "migrated") {
      await browser.driver.get("https://experiencesit.gfs.com/");
      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Ordering')]"))),
          3000,
          "Ordering is not visible after 3 secs."
        )
        .then(function () { });
      await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[2]/div[1]/div/a")).click();
      await browser.sleep(1000);
      await elementLocatorFunctions
        .enterTextById("idp-discovery-username", username)
        .then(async function (actual) { });
      await elementLocatorFunctions
        .clickElementById("idp-discovery-submit")
        .then(async function () {
          console.log("clicked on Next button");
        });
      await elementLocatorFunctions
        .enterTextById("okta-signin-password", password)
        .then(async function (actual) { });
      await elementLocatorFunctions
        .clickElementById("okta-signin-submit")
        .then(async function () {
          console.log("clicked on submit button");
        });
        await browser.waitForAngularEnabled(false);
    }
    else if (global.env == "notMigrated") {
      await browser.driver.get("https://experiencesit.gfs.com/");
      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Ordering')]"))),
          3000,
          "Ordering is not visible after 3 secs."
        )
        .then(function () { });
      await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[2]/div[1]/div/a")).click();
      await browser.sleep(1000);

      await elementLocatorFunctions
        .enterTextById("idp-discovery-username", username)
        .then(async function (actual) { });
      await elementLocatorFunctions
        .clickElementById("idp-discovery-submit")
        .then(async function () {
          console.log("clicked on Next button");
        });

      await elementLocatorFunctions
        .enterTextById("username", username)
        .then(async function (actual) { });
      await elementLocatorFunctions
        .enterTextById("password", password)
        .then(async function (actual) { });
        await browser.element(by.xpath("/html/body/div[2]/div/form/div[2]/input[4]")).click();
        await browser.waitForAngularEnabled(false);
    }
  }
};
module.exports = new LandingPage();