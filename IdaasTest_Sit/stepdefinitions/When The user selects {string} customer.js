var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var { browser } = require("protractor");

When("The user selects {string} customer", async function (string) {
  await browser.sleep(8000);
  await elementLocatorFunctions
    .getAllElementsTextByXpath("//body/app-root/div[1]")
    .then(async function (content) {
      return (contentOutput = content);
    });
  if (global.contentOutput.includes("Select a Location")) {
    await browser.sleep(3000);
    await elementLocatorFunctions.clickElementByXpath(
      "//*[contains(text(),'" + string + "')]"
    );
  } else {
    await elementLocatorFunctions.clickElementByXpath(
      "/html/body/app-root/app-header/div/div[1]/div/div[2]/gfs-customer-unit-selector/a/div/div"
    );
    await elementLocatorFunctions.clickElementByXpath(
      "//*[contains(text(),'" + string + "')]"
    );
    await browser.sleep(3000);
  }
  await browser.refresh();
  try {
    await browser.driver.wait(
      until.presenceOf(
        element(
          by.xpath('//a[contains(@class,"feedback_minimized_message_close")]')
        )
      ),
      10000,
      "Element taking too long to appear in the DOM"
    );
    await browser
      .element(
        by.xpath('//a[contains(@class,"feedback_minimized_message_close")]')
      )
      .click()
      .then(async function () {});
    console.log("closed hotjar feedback icon");
  } catch {
    console.log("hotjar not found");
  }
});
