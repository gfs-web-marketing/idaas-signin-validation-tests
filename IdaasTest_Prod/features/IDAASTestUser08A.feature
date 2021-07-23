
Feature: IDAASTestUser08A
        Scenario: IDAASTestUser08A
                Given The user is signed into Ordering using username "IDAASTestUser08A"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "Account" on pagesource