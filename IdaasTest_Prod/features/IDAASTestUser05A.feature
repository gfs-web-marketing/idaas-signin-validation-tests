
Feature: IDAASTestUser05A
        Scenario: IDAASTestUser05A
                Given The user is signed into Ordering using username "IDAASTestUser05A"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "Account" on pagesource