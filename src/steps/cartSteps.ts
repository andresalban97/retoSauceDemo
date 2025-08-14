import { Given, Then, When } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { expect, Page } from "@playwright/test";
import { ENV } from '../supports/env';
import { CartPage } from "../pages/CartPage";

let loginPage: LoginPage;
let cartPage: CartPage;

Given('el usuario ha iniciado sesión con credenciales válidas', async function(){
    loginPage = new LoginPage(this.page as Page);

    await loginPage.navigateToLoginPage();
    await loginPage.setUsername(ENV.USERNAME);
    await loginPage.setPassword(ENV.PASSWORD);
    await loginPage.clickLogin();

    cartPage = new CartPage(this.page as Page);
});

When('el usuario agrega el producto {string} al carrito', async function(idproduct:string){
    cartPage = new CartPage(this.page);
    await cartPage.addProductToCart(idproduct);

});

Then('el producto {string} debe aparecer en el carrito de compras', async function (productName: string) {
    cartPage = new CartPage(this.page);
    await cartPage.openCart();
    const isVisible = await cartPage.isProductInCart(productName);
    expect(isVisible).toBeTruthy();
});

