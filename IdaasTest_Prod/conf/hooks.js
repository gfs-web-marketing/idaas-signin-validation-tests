const { After, BeforeAll, Before, AfterAll } = require("cucumber");
var { browser } = require("../node_modules/protractor/built/index");
BeforeAll(async function () {
  await browser.waitForAngularEnabled(false);
 // browser.ignoreSynchronization = true;
  var { setDefaultTimeout } = require("cucumber");
  setDefaultTimeout(130 * 1000);
});

Before(async function (scenario) {
  await browser.waitForAngularEnabled(false);
 // browser.ignoreSynchronization = true;
  await browser.executeScript("sauce:job-name=" + scenario.pickle.name);
  await browser.sleep(3000);
  scenarioName = scenario.pickle.name;
  /* 
  var currentdate = new Date();
  date = currentdate.getDate();
  month = currentdate.getMonth();
  year = currentdate.getFullYear();
  await browser.driver.executeScript(
    `sauce:job-build=gordon-inventory-${browser.browserName}-${global.env}-${year}-${month}-${date}`
  );
 */
  var { setDefaultTimeout } = require("cucumber");
  setDefaultTimeout(130 * 1000);
  await console.log("scenario: " + scenario.pickle.name);
});

AfterAll(async function () {});

After(async function (scenario) {
  await browser.executeScript("sauce:job-name=" + scenario.pickle.name);
  await browser.sleep(3000);
  switch (scenario.result.status) {
    case "passed":
      await browser.executeScript("sauce:job-result=passed");
      break;
    case "failed":
      await browser.executeScript("sauce:job-result=failed");
      break;
    default:
      await browser.executeScript("sauce:job-result=failed");
      break;
  }
});
