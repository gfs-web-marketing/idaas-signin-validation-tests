
Feature: IDAASTestUser03A
        Scenario: IDAASTestUser03A
                Given The user is signed into Ordering using username "IDAASTestUser03A"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "History" on pagesource