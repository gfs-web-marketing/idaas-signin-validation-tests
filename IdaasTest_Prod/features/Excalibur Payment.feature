Feature: Excalibur - Online Payment
        Scenario: Excalibur - Online Payment
                Given The user is signed into "Online Payment" using username "excalibur"
                Then The user should be redirected to "https://apps.gfs.com/payment/us/"
                And The user should see "Pay" on pagesource
