import {Given, When,  Then} from '@cucumber/cucumber';
import { chromium} from 'playwright';
import {expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;


Given('I navigate to www.saucedemo.com',async function (){
    loginPage = new LoginPage(this.page);
    await loginPage.navigateToLoginPage()
    console.log('Navigating to SauceDemo');

});

Given('I validate the page title', async function(){
    await loginPage.validateLoginPageTitle();
});


When('I enter username: {string}', async function (username:string) {
    await loginPage.setUsername(username);
    console.log(`Entering username as ${username}`);
});

When('I enter password: {string}',async function(password:string){
    await loginPage.setPassword(password);
    console.log(`Entering password as ${password}`);

});

When('I click the Login button',async function(){
    await loginPage.clickLogin();
    console.log('Clicking the login button');

});
        


// Then('I should see the products page', function (dataTable){

// } );
