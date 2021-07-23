// Use this stepdefinition for going to a page as an existing user
// App uses abhilash.banala+grauto as existing user

var LandingPage = require("../pages/LandingPage.js");
var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
const { assert } = require("chai");
var { browser } = require("protractor");

Given("The user is signed into Ordering using username {string}", async function (string) {
  switch (string) {
    case "Login":
      await LoginPage.goToLoginPage().then(function () { });
      break;
    default: 
      console.log('username: '+string)
      //scenario2 = string;
        await LandingPage
          .goToHomepage(string)
          .then(async function () {
          //  scenario2 = string;
            await browser.driver.sleep(10000);
          });
        break;
  }
});
