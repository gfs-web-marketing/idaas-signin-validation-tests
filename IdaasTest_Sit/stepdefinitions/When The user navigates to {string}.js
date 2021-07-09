var { browser } = require("protractor");

When("The user navigates to {string}", async function(string) {
  switch (string) {
    case "Gordon Inventory":
      if (global.env == "tst") {
        var url = "https://inventory-" + env + ".gfs.com";
        await browser.driver
          .navigate()
          .to(url)
          .then(function () { })
      }
      else {
        var url = "https://" + env;
        await browser.driver
          .navigate()
          .to(url)
          .then(function () { })
      }
      break;
  }
});
