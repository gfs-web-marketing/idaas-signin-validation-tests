
Feature: IDAASTestUser07A
        Scenario: IDAASTestUser07A
                Given The user is signed into Ordering using username "IDAASTestUser07A"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "History" on pagesource