Feature: Excalibur
        Scenario: Excalibur - Recipe
                Given The user is signed into "Recipe Manager" using username "excalibur"
                Then The user should be redirected to "https://apps.gfs.com/recipeManager"
                And The user should see "Recipe" on pagesource