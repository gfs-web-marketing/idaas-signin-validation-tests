var elementLocatorFunctions = require("./elementLocatorFunctions.js");
var { browser } = require("protractor");
const { assert } = require("chai");
var until = protractor.ExpectedConditions;
var password = "Webtools!1";
var LandingPage2 = function () {
  this.goToHomepage2 = async function (app, username) {
    if (global.env == "migrated") {
      await browser.driver.get("https://experience.gfs.com/");
      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Recipe Manager')]"))),
          3000,
          "Recipe Manager is not visible after 3 secs."
        )
        .then(function () { });

      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Inventory Manager')]"))),
          3000,
          "Inventory Manager is not visible after 3 secs."
        )
        .then(function () { });

      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Payment')]"))),
          3000,
          "Payment is not visible after 3 secs."
        )
        .then(function () { });

      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Item List Manager')]"))),
          3000,
          "Item List Manager is not visible after 3 secs."
        )
        .then(function () { });


      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Online Reporting')]"))),
          3000,
          "Online Reporting is not visible after 3 secs."
        )
        .then(function () { });

      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Ordering')]"))),
          3000,
          "Ordering is not visible after 3 secs."
        )
        .then(function () { });

      if (app == 'Recipe Manager') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[3]/div[1]/div/a")).click();
      }
      else if (app == 'Inventory Manager') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[4]/div[1]/div/a")).click();
      }
      else if (app == 'Online Payment') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[5]/div[1]/div/a")).click();
      }

      else if (app == 'Item List Manager') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[6]/div[1]/div/a")).click();

      }
      else if (app == 'Online Reporting') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[8]/div[1]/div/a")).click();
      }
      else if (app == 'Ordering') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[2]/div[1]/div/a")).click();
      }
      await browser.sleep(2000);
      await elementLocatorFunctions
        .enterTextById("idp-discovery-username", username)
        .then(async function (actual) { });
      /*await elementLocatorFunctions
        .clickElementById("idp-discovery-submit")
        .then(async function () {
          console.log("clicked on Next button");
        });*/
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
      await browser.driver.get("https://experience.gfs.com/");
      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Recipe Manager')]"))),
          3000,
          "Recipe Manager is not visible after 3 secs."
        )
        .then(function () { });

      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Inventory Manager')]"))),
          3000,
          "Inventory Manager is not visible after 3 secs."
        )
        .then(function () { });

      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Payment')]"))),
          3000,
          "Payment is not visible after 3 secs."
        )
        .then(function () { });

      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Item List Manager')]"))),
          3000,
          "Item List Manager is not visible after 3 secs."
        )
        .then(function () { });


      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Online Reporting')]"))),
          3000,
          "Online Reporting is not visible after 3 secs."
        )
        .then(function () { });

      await browser.driver
        .wait(
          until.presenceOf(element(by.xpath("//*[contains(text(),'Ordering')]"))),
          3000,
          "Ordering is not visible after 3 secs."
        )
        .then(function () { });

      if (app == 'Recipe Manager') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[3]/div[1]/div/a")).click();
      }
      else if (app == 'Inventory Manager') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[4]/div[1]/div/a")).click();
      }
      else if (app == 'Online Payment') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[5]/div[1]/div/a")).click();
      }

      else if (app == 'Item List Manager') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[6]/div[1]/div/a")).click();

      }
      else if (app == 'Online Reporting') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[8]/div[1]/div/a")).click();
      }
      else if (app == 'Ordering') {
        await browser.element(by.xpath("/html/body/div[1]/div/div[2]/div[2]/header/div/div[2]/div[1]/nav/ul/li[2]/div[1]/div/a")).click();
      }

      await browser.sleep(2000);

/*       await elementLocatorFunctions
        .enterTextById("idp-discovery-username", username)
        .then(async function (actual) { });
      await elementLocatorFunctions
        .clickElementById("idp-discovery-submit")
        .then(async function () {
          console.log("clicked on Next button");
        });
 */ if (app == 'Online Payment') {
        await elementLocatorFunctions
          .enterTextById("j_username", username)
          .then(async function (actual) { });
        await elementLocatorFunctions
          .enterTextById("j_password", password)
          .then(async function (actual) { });
        await browser.element(by.xpath("//*[@id='submit']")).click();
        await browser.waitForAngularEnabled(false);
      }
      else{
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
  }
};
module.exports = new LandingPage2();
