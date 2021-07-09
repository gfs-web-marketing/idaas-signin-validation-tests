//Use this stepdefinition for formcontrol fields, anywhere user inputs in formcontrol field

var elementLocatorFunctions = require("../pages/elementLocatorFunctions.js");
var { browser } = require("protractor");

When("The user enters {string} value in {string} field", async function (
  string1,
  string2
) {
  switch (string2) {
    case "Search":
      await browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//input[@data-placeholder='" + string2 + "']",
        string1
      );
      await browser
        .element(by.xpath("//input[@data-placeholder='" + string2 + "']", string1))
        .sendKeys(protractor.Key.ENTER);

      break;
    case "searchString":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//input[@name='" + string2 + "']",
        string1
      );
      await browser
        .element(by.xpath("//input[@name='" + string2 + "']", string1))
        .sendKeys(protractor.Key.ENTER);

      break;
    case "Net Weight":
      await browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//input[@ng-reflect-placeholder='" + string2 + "']",
        string1
      );
      break;

    case "Weight Unit Number of Units":
      await browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath("//input[@ng-reflect-placeholder='Number of Units' and @formcontrolname='netWeight']");
     break;


    case "Volume Unit Number of Units":
      await browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath("//input[@ng-reflect-placeholder='Number of Units' and @formcontrolname='netVolume']");
     break;

    case "Filter Worksheet Items":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//input[@placeholder='" + string2 + "']",
        string1
      );
      await browser
        .element(by.xpath("//input[@placeholder='" + string2 + "']", string1))
        .sendKeys(protractor.Key.ENTER);

      break;

    case "supplier":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//input[contains(@class, 'supplier-input')]",
        string1
      );

      await browser
        .element(
          by.xpath("//input[contains(@class, 'supplier-input')]", string1)
        )
        .sendKeys(protractor.Key.ENTER);

      try {
        await browser.element(by.xpath('//div[@class="logo-wrapper"]')).click();
      } catch { }

      break;

    case "storageArea":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//input[contains(@class, 'storage-area-input')]",
        string1
      );

      await browser
        .element(by.xpath("//input[contains(@class, 'storage-area-input')]"))
        .sendKeys(protractor.Key.ENTER);
      try {
        await browser.element(by.xpath('//div[@class="logo-wrapper"]')).click();
      } catch { }
      break;

    case "counting-unit-name-4":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextById(
        "counting-unit-name-4",
        string1
      );

      break;
    case "counting-unit-qty-4":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextById(
        "counting-unit-qty-4",
        string1
      );

      break;
    case "category":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//input[contains(@class, 'category-input')]",
        string1
      );
      await browser
        .element(by.xpath("//input[contains(@class, 'category-input')]"))
        .sendKeys(protractor.Key.ENTER);
      try {
        await browser.element(by.xpath('//div[@class="logo-wrapper"]')).click();
      } catch { }
      break;

    case "primaryUnit":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//*[@fieldname='counting-unit-name-0']",
        string1
      );

      await browser
        .element(by.xpath("//*[@fieldname='counting-unit-name-0']"))
        .sendKeys(protractor.Key.ENTER);
      try {
        await browser.element(by.xpath('//div[@class="logo-wrapper"]')).click();
      } catch { }
      break;
    case "secondaryUnit":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//*[@fieldname='counting-unit-name-1']",
        string1
      );

      await browser
        .element(by.xpath("//*[@fieldname='counting-unit-name-0']"))
        .sendKeys(protractor.Key.ENTER);
      try {
        await browser.element(by.xpath('//div[@class="logo-wrapper"]')).click();
      } catch { }
      break;
    case "primaryUnitQty":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//*[@id='counting-unit-qty-0']",
        string1
      );

      await browser
        .element(by.xpath("//*[@id='counting-unit-qty-0']", string1))
        .sendKeys(protractor.Key.ENTER);
      try {
        await browser.element(by.xpath('//div[@class="logo-wrapper"]')).click();
      } catch { }

      break;

    case "secondaryUnitQty":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//*[@id='counting-unit-qty-1']",
        string1
      );

    case "Custom unit name":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//*[@id='counting-unit-name-1']",
        string1
      );

    case "Counting unit qty":
      browser.sleep(2000);
      await elementLocatorFunctions.enterTextByXpath(
        "//*[@id='counting-unit-qty-1']",
        string1
      );

      await browser
        .element(by.xpath("//*[@id='counting-unit-qty-1']", string1))
        .sendKeys(protractor.Key.ENTER);
      try {
        await browser.element(by.xpath('//div[@class="logo-wrapper"]')).click();
      } catch { }

      break;
    default:
      await browser.sleep(2000);
      if (
        global.scenarioName === "Create Worksheet using Get Started Button" &&
        browser.browserName === "Safari" &&
        string2 == "primaryCount"
      ) {
        await browser.sleep(3000);
        var concatstring = string1.concat("-", string2);
        await console.log(concatstring);
        await elementLocatorFunctions.clickElementByXpath(
          "//*[starts-with(@id,'storage-area-item-panel-Cooler')]//div"
        );
      }
      await elementLocatorFunctions.enterTextByXpath(
        "//input[@formcontrolname='" + string2 + "']",
        string1
      );
      try {
        await browser.element(by.xpath('//div[@class="logo-wrapper"]')).click();
      } catch { }
  }
});
