Feature: Excalibur - ILM
        Scenario: Excalibur - ILM
                Given The user is signed into "Item List Manager" using username "excalibur"
                Then The user should be redirected to "https://apps.gfs.com/ilmWeb"
                And The user should see "Item List Manager" on pagesource
