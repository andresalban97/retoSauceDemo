Feature: Inicio de sesion Usuario

    
    Background: I am on SauceDemo page to log in
        Given I navigate to www.saucedemo.com
        Given I validate the page title

    Scenario: Succesfull Login 
        When I enter username: "standard_user"
        And I enter password: "secret_sauce"
        And I click the Login button
        # Then I should see the products page 

    Scenario: Login fails with blocked user
        When I enter username: "locked_out_user"
        And I enter password: "secret_sauce"
        And I click the Login button
        # Then I should see an error message
