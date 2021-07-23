Feature: Excalibur
        Scenario: Excalibur - Inventory
                Given The user is signed into "Inventory Manager" using username "excalibur"
                Then The user should be redirected to "https://apps.gfs.com/cimWeb"
                And The user should see "Inventory" on pagesource