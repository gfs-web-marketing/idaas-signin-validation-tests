
Feature: IDAASTestUser01A
        Scenario: IDAASTestUser01A
                Given The user is signed into Ordering using username "IDAASTestUser01A"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "Account" on pagesource