const { assert, toUpperCase } = require("chai");
var { browser, element } = require("protractor");
var until = protractor.ExpectedConditions;

Then("The user should see {string}, {string} times on page", async function (
  string1,
  string2
) {
  await browser.sleep(3000);
  await browser.driver.wait(
    until.presenceOf(
      element(by.xpath("//*[contains(text(),'" + string1 + "')]"))
    ),
    120000,
    "Element taking too long to appear in the DOM"
  );

  try {
    await element
      .all(by.xpath("//*[contains(text(),'" + string1 + "')]"))
      .get(string2 - 1)
      .getText()
      .then(async function (k) {
        await console.log("Item " + k + " appears " + string2 + " times");
      });
  } catch {
    console.log("cannot find duplicated item");
    assert.fail();
  }
});
