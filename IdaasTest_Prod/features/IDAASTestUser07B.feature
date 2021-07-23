
Feature: IDAASTestUser07B
        Scenario: IDAASTestUser07B
                Given The user is signed into Ordering using username "IDAASTestUser07B"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "History" on pagesource