var retry = require("protractor-retry").retry;
var timeInMs = Date.now();
exports.config = {
  // specFileRetries: 2,
  // specFileRetriesDeferred: false,
  // logLevel: "info",
 // bail: 0,
  //waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  idleTimeout: 60000,
  commandTimeout: 60000,
  connectTimeout: 60000,
  //useAllAngular2AppRoots: true,
  //useAllAngularAppRoots: true,
  //allScriptsTimeout: 25000,
  getPageTimeout: 25000,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  cucumberOpts: {
    format: ["json:reports/chrome/*.json"],
    require: ["../stepdefinitions/*.js", "../conf/hooks.js"],
    tags: ['(not @disabled)'],
    strict: false,
    dryRun: false,
    compiler: [],
    //retry: 3
  },
  onPrepare: async function () {
    await retry.onPrepare();
    env = "notMigrated";
    console.log("env: " + global.env);
    //get browsername
    browser.getBrowserName = function () {
      return browser.getCapabilities().then(function (caps) {
        browser.browserName = caps.get("browserName");
      });
    };
    // resolve the promised so the browser name is obtained.
    browser.getBrowserName();
    const { Given, Then, When, Before } = require("cucumber");
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
    var chai = require("chai");
    chai.use(require("chai-as-promised"));
  },
  
  onCleanUp: function (results) {
    retry.onCleanUp(results);
  },
  afterLaunch: function () {
    return retry.afterLaunch(2);
  },
  multiCapabilities: [
    {
      seleniumAddress:
        "https://inventory_manager:a6456d5f-2a8c-44a0-9e69-a4e6e6cc93cc@ondemand.saucelabs.com:443/wd/hub",
      // tunnelIdentifier: "t1",
      //parentTunnel: "apps_tools",
      browserName: "chrome",
      marionette: false,
      directConnect: "true",
      timeZone: "New_York",
      screenResolution: "1920x1080",
      chromeOptions: {
        args: ["--no-sandbox", "--incognito", "start-maximized"],
      },
      version: "latest",
      platform: "Windows 10",
      shardTestFiles: true,
      maxInstances: 25,
      build: //process.env.JOB_NAME + "_" + process.env.BUILD_NUMBER,
      "non-migrated-users-sit_"+timeInMs,    
      extendedDebugging: true,
      capturePerformance: true
    },
  ],
};
