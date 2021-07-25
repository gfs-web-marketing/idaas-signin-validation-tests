Feature: Excalibur - Online Reporting
        Scenario: Excalibur - Online Reporting
                Given The user is signed into "Online Reporting" using username "excalibur"
                Then The user should be redirected to "https://bi.gfs.com/MicroStrategy/servlet/mstrWeb"
                And The user should see "Online Reporting" on pagesource
