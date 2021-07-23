// Use this stepdefinition for going to a page as an existing user
// App uses abhilash.banala+grauto as existing user

var LandingPage2 = require("../pages/LandingPage2.js");
var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
const { assert } = require("chai");
var { browser } = require("protractor");

Given("The user is signed into {string} using username {string}", async function (string1, string2) {
  switch (string2) {
    case "Login":
      await LoginPage2.goToLoginPage2().then(function () { });
      break;
    default: 
      console.log('username: '+string2)
      console.log('app: '+string1)
      //scenario2 = string2;
        await LandingPage2
          .goToHomepage2(string1,string2)
          .then(async function (string2) {
            //scenario2 = string2;
            await browser.driver.sleep(10000);
          });
        break;
  }
});
