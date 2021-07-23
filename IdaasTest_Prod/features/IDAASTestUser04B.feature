
Feature: IDAASTestUser04B
        Scenario: IDAASTestUser04B
                Given The user is signed into Ordering using username "IDAASTestUser04B"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "History" on pagesource