# gordon-inventory-cucumber-saucelabs-crossbrowser-ui-functional-tests
This repository contains Gordon Inventory Saucelabs UI Functional and crossbrowser tests

# Gordon Inventory Regression Test Suite

## How this works:

These tests use protractor-cucumber-framework.

Tests are executed on Saucelabs VM. Userid/Password in lastpass. 
http://Saucelabs.com

Cucumber is a test framework that uses gherkin language(Given When Then). All the tests use Give When Then format. Step defintion files in /stepdefinitions dir map the gherkin phrases used in the tests to the code.
https://cucumber.io/docs/gherkin/

## How we can run:

### To run these tests from local machine -

#### Prerequisites:
Have Node installed on your machine

1. Clone this project
2. Open the project in an IDE.
3. Run 'npm install' to install all the required dev dependencies listed in package.json.
4. Comment line `format: ["json:reports/chrome/*.json"],` in `conf_chrome_pr` and `conf_chrome_tst` if you are running from local machine.
5. To run these tests against specific pr, update the `prnum` value in `conf_chrome_pr`(at line 33) file with the pr number you need.
6. Run `npm run-script test_chrome_pr` to run the tests against 'pr' environment.
7. Run `npm run-script test_chrome_tst` to run the tests against 'tst' environment 

If you only want to run specifc files you can update the specs here 'specs: ["./features/_.feature"]' in conf file. Tests run in parallel with maxiumum of 30 tests at a time. 
If a test fails for any reason, it will retry 2 times before marking the build as failed.
Tests can be viewed on Saucelabs. Go to https://app.saucelabs.com and sign in using valid credentials(in Lastpass or ask Abhi).

### To run these tests from Jenkins -
1. Go to https://ci.gfs.com/crmFrontOffice/view/Gordon%20Inventory/job/gordon-inventory-cucumber-saucelabs-crossbrowser-ui-functional-tests-chrome-tst/ and click 'Build Now' to start the tests. This job points to the test code thats in the `pr-tst-RegressionTests` branch.
2. You can view the test results in the console log.
3. You can view the Cucumber reports by clicking the Cucumber reports link on jenkins

### Add Cucumber Extension -
```
Name: Cucumber (Gherkin) Full Support
Id: alexkrechik.cucumberautocomplete
Description: VSCode Cucumber (Gherkin) Full Language Support + Formatting + Autocomplete
Version: 2.15.1
Publisher: Alexander Krechik
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete
```
1. Search and Add above extension to vscode
2. Create settings.json in `C:\Users\<username>\AppData\Roaming\Code\User` folder and add the following in settings.json file.
   ```
   {
    "cucumberautocomplete.steps": [
        "/stepdefinitions/*.js"
    ],
    "gherkin-autocomplete.featuresPath": "features",
    "cucumberautocomplete.syncfeatures": "features/**/*.feature",
    "cucumberautocomplete.strictGherkinCompletion": false,
    "cucumberautocomplete.onTypeFormat": true,
     "editor.quickSuggestions": 
     {
        "comments": false,
        "strings": true,
        "other": true
     }, 
     "javascript.updateImportsOnFileMove.enabled":"always",
     "javascript.implicitProjectConfig.experimentalDecorators":true
     }
 
 This will enable Auto complete of feature files and `Go to Definition` functionality that takes user to step defintion.
