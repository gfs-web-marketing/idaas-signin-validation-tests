var { browser } = require("protractor");

When("The user hits {string} key", async function(string) {
  switch (string) {
    case "Enter":
      await browser
        .actions()
        .sendKeys(protractor.Key.ENTER)
        .perform();
      break;
    default:
      console.log("No code for " + string + " key");
  }
});
