
Feature: IDAASTestUser06B
        Scenario: IDAASTestUser06B
                Given The user is signed into Ordering using username "IDAASTestUser06B"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "History" on pagesource