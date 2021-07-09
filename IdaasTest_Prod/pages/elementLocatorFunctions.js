var { browser } = require("../node_modules/protractor/built/index");
var until = protractor.ExpectedConditions;
//Actions on homepage
var elementLocatorFunctions = function () {
  //-------------get functions------------------------

  this.getAllElementsTextByXpath = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element.all(by.xpath(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );
    return await browser.element(by.xpath(elementLocator)).getText();
  };

  this.getAllElementsTextById = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element.all(by.id(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );
    return await browser.element(by.id(elementLocator)).getText();
  };

  this.getTextByXpath = async function (elementLocator) {

    console.log('element locator is: '+elementLocator)
    await browser.driver.wait(
      until.presenceOf(element(by.xpath(elementLocator))),
      30000,
      "Element taking too long to appear in the DOM"
    );
    return await browser.element(by.xpath(elementLocator)).getText();
  };

  this.getTextById = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element(by.id(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );

    return browser.element(by.id(elementLocator)).getText();
  };

  this.getTextOnSidePanel = async function (textToFind) {
    await browser.driver.wait(
      until.presenceOf(element(by.xpath(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );

    return browser.element(by.xpath(elementLocator)).getText();
  };

  //-------------click functions------------------------
  this.clickElementByCss = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element(by.css(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );

    await browser.element(by.css(elementLocator)).click();
    return await browser.waitForAngular();
  };

  this.clickElementByXpath = async function (elementLocator) {
    console.log("Element to be clicked is: "+elementLocator);
    await browser.driver
      .wait(
        until.presenceOf(element(by.xpath(elementLocator))),
        60000,
        "Element taking too long to appear in the DOM"
      )
      .then(function () { });
    await browser.element(by.xpath(elementLocator)).click();
    return;
  };

  this.clickElementBycssContainingText = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element(by.cssContainingText(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );
    await browser.element(by.cssContainingText(elementLocator)).click();
    return await browser.waitForAngular();
  };

  this.clickElementByButtonText = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element(by.buttonText(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );

    await browser.element(by.buttonText(elementLocator)).click();
    return await browser.waitForAngular();
  };

  this.clickElementBypartialButtonText = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element(by.partialButtonText(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );

    if (
      elementLocator == "Done" ||
      elementLocator == "GET STARTED" ||
      elementLocator == "TAKE INVENTORY"
    ) {
      var currentdate = new Date();
      minutes = currentdate.getMinutes();
    }

    await browser.element(by.partialButtonText(elementLocator)).click();

    if (
      (global.scenarioName ===
        "Add GFS-Items to Worksheet Validations, Add Custom StorageArea, Add Custom Category" ||
        global.scenarioName ===
        "Add Non GFS-Items to Worksheet Functionality, Add Custom StorageArea, Add Custom Category" ||
        global.scenarioName ===
        "Add GFS-Items to Worksheet Functionality, Select StorageArea, Add Custom Category, Pricing" ||
        global.scenarioName ===
        "Add GFS-Items to Worksheet Functionality, Select StorageArea, Default Category, Pricing" ||
        global.scenarioName ===
        "Add Non GFS-Items to Worksheet Functionality, Add Custom StorageArea, Select Category, Edit Non-GFS") &&
      browser.browserName === "Safari" &&
      (elementLocator == "Save" || elementLocator == "Done")
    ) {
      await browser.driver.wait(
        until.presenceOf(element(by.xpath('//*[@class="message-content"]'))),
        10000,
        "Element taking too long to appear in the DOM"
      );

      await browser.driver.wait(
        until.invisibilityOf(
          element(by.xpath('//*[@class="message-content"]'))
        ),
        10000,
        "Element taking too long to disappear in the DOM"
      );
      browser.sleep(3000);
    }

    return await browser.waitForAngular();
  };

  this.clickElementById = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element(by.id(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );

    await browser.element(by.id(elementLocator)).click();
    return await browser.waitForAngular();
  };

  //-------------enter text functions------------------------
  this.enterTextByXpath = async function (elementLocator, string1) {
    /*        
    Loading Spinner
    try{
            console.log("in try")
        await browser.driver.wait(until.visibilityOf(element(by.xpath("//circle[@cx='50%']"))), 120000, 'Element taking too long to appear in the DOM'); 
        browser.sleep(10000)
    }
        catch{console.log("in catch")} */

    await console.log("element locator is :" + elementLocator);
    await console.log("string is:" + string1);
    await browser.driver.wait(
      until.presenceOf(element(by.xpath(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );
    await browser
      .element(by.xpath(elementLocator))
      .getAttribute("value")
      .then(async function (value) {
        attributevalue = value;
        console.log("Attribute value is: " + attributevalue);
      });
    console.log("Attribute length is: " + attributevalue.length);
    console.log(browser.browserName);
    if (browser.browserName == "chrome") {
      if (elementLocator == "//input[@formcontrolname='name']") {
        /* await browser.driver.wait(
          until.presenceOf(element(by.xpath('.//*[.="Untitled Inventory"]'))),
          120000,
          "Element taking too long to appear in the DOM"
        );
        await browser.driver.findElement(By.xpath('.//*[.="Untitled Inventory"]')).click(); */
        await browser.driver.wait(
          until.presenceOf(element(by.id("worksheet-title"))),
          120000,
          "Element taking too long to appear in the DOM"
        );
        await browser.driver.findElement(By.id("worksheet-title")).click();
        await browser
          .actions()
          .keyDown(protractor.Key.CONTROL)
          .sendKeys("a")
          .perform();
        await browser
          .element(by.xpath(elementLocator))
          .sendKeys(protractor.Key.BACK_SPACE);
        await browser.element(by.xpath(elementLocator)).sendKeys(string1);
        var currentdate = new Date();
        minutes = currentdate.getMinutes();
        await browser.element(by.xpath("//html//body//app-root")).click();
      } else if ((elementLocator == "//input[@formcontrolname='primaryCount']") && (global.scenarioName === "Create Worksheet using Get Started Button")) {
        console.log('in here')
        browser.sleep(10000);
        await browser.element(by.xpath("//*[@id='cdk-drop-list-2']//div[2]//mat-grid-list//div//mat-grid-tile[2]//figure//div//div//input")).clear();
        await browser.element(by.xpath("//*[@id='cdk-drop-list-2']//div[2]//mat-grid-list//div//mat-grid-tile[2]//figure//div//div//input")).sendKeys(string1);
      }
      else {
        await browser.element(by.xpath(elementLocator)).click();
        await browser
          .actions()
          .keyDown(protractor.Key.CONTROL)
          .sendKeys("a")
          .perform();
        await browser
          .element(by.xpath(elementLocator))
          .sendKeys(protractor.Key.BACK_SPACE);
        await browser.element(by.xpath(elementLocator)).sendKeys(string1);
      }
    } else {
      if (elementLocator == "//input[@formcontrolname='name']") {
        /*        await browser.driver.wait(
                 until.presenceOf(element(by.xpath('.//*[.="Untitled Inventory"]'))),
                 120000,
                 "Element taking too long to appear in the DOM"
               );
               await browser.driver.findElement(By.xpath('.//*[.="Untitled Inventory"]')).click(); */
        await browser.driver.wait(
          until.presenceOf(element(by.id("worksheet-title"))),
          120000,
          "Element taking too long to appear in the DOM"
        );
        await browser.driver.findElement(By.id("worksheet-title")).click();
        if (attributevalue == "") {
          await console.log(" attribute value is blank");
        } else {
          await console.log(" attribute value is not blank");
          await browser.driver.wait(
            until.presenceOf(element(by.id("edit-name-input"))),
            120000,
            "Element taking too long to appear in the DOM"
          );
          await browser.element(by.id("edit-name-input")).click();
          for (var i = 0; i <= attributevalue.length; i++) {
            await browser
              .element(by.xpath(elementLocator))
              .sendKeys(protractor.Key.BACK_SPACE);
          }

          for (var i = 0; i <= 5; i++) {
            await browser
              .element(by.xpath(elementLocator))
              .sendKeys(protractor.Key.DELETE);
          }
        }
        await browser.element(by.xpath(elementLocator)).sendKeys(string1);
        await browser.element(by.xpath("//html//body//app-root")).click();
      } else {
        if (attributevalue == "") {
          console.log("in null");
        } else {
          console.log("outside null attribute value: " + attributevalue);
          for (var i = 0; i <= attributevalue.length; i++) {
            await browser
              .element(by.xpath(elementLocator))
              .sendKeys(protractor.Key.BACK_SPACE);
          }
        }
        await browser.element(by.xpath(elementLocator)).sendKeys(string1);
      }
    }
  };

  this.enterTextById = async function (elementLocator, string) {
    await browser.driver.wait(
      until.presenceOf(element(by.id(elementLocator, string))),
      120000,
      "Element taking too long to appear in the DOM"
    );
    await browser.element(by.id(elementLocator)).clear();
    return browser.element(by.id(elementLocator)).sendKeys(string);
  };

  this.enterUsernamePasswordById = async function (
    elementLocator1,
    elementLocator2,
    string1,
    string2
  ) {
    await browser.driver.wait(
      until.presenceOf(
        element(by.id(elementLocator1, elementLocator2, string1, string2))
      ),
      120000,
      "Element taking too long to appear in the DOM"
    );
    await browser.element(by.id(elementLocator1)).click();
    await browser.element(by.id(elementLocator1)).clear();
    await browser.element(by.id(elementLocator1)).sendKeys(string1);
    await browser.element(by.id(elementLocator2)).click();
    await browser.element(by.id(elementLocator2)).clear();
    await browser.element(by.id(elementLocator2)).sendKeys(string2);
  };

  this.hoverElementByXpath = async function (elementLocator) {
    await browser.driver.wait(
      until.presenceOf(element(by.xpath(elementLocator))),
      120000,
      "Element taking too long to appear in the DOM"
    );
    return browser.element(by.xpath(elementLocator));
  };
};

module.exports = new elementLocatorFunctions();
