@disabled
Feature: GNAUSTest2
        Scenario: GNAUSTest2
                Given The user is signed into Ordering using username "GNAUSTest2"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "Account" on pagesource