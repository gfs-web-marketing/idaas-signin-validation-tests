
Feature: IDAASTestUser03B
        Scenario: IDAASTestUser03B
                Given The user is signed into Ordering using username "IDAASTestUser03B"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "History" on pagesource