// Use this stepdefinition for going to a page as an existing user
// App uses abhilash.banala+grauto as existing user

var { browser } = require("protractor");

When("The User does page refresh", async function () {
  browser.sleep(3000);
  await browser.driver.navigate().refresh();
  await browser.waitForAngular();
});
