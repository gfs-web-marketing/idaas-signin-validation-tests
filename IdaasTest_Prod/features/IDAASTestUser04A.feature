
Feature: IDAASTestUser04A
        Scenario: IDAASTestUser04A
                Given The user is signed into Ordering using username "IDAASTestUser04A"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "History" on pagesource