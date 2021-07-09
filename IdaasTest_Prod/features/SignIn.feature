@disabled
Feature: SignIn
        Scenario: SignIn
                Given The user is signed into Ordering using username "GNAUSTest"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"