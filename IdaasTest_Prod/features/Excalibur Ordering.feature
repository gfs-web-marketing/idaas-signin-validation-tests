Feature: Excalibur
        Scenario: Excalibur - Ordering
                Given The user is signed into "Ordering" using username "excalibur"
                Then The user should be redirected to "https://apps.gfs.com/doc/desktop/"
                And The user should see "Account" on pagesource