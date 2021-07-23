
Feature: IDAASTestUser08B
        Scenario: IDAASTestUser08B
                Given The user is signed into Ordering using username "IDAASTestUser08B"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "Account" on pagesource