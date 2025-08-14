import { Given, When, Then } from "@cucumber/cucumber";
import { CartPage } from "../pages/CartPage";
import { expect, Page } from "@playwright/test";
import { CheckoutPage } from "../pages/CheckoutPage";
import { faker } from '@faker-js/faker';

let cartPage: CartPage;
let checkoutPage: CheckoutPage;

When('el usuario abre el carrito', async function () {
    cartPage = new CartPage(this.page as Page);
    await cartPage.openCart();

    checkoutPage = new CheckoutPage(this.page as Page);

});

When('el usuario inicia el proceso de checkout', async function () {
    await checkoutPage.startCheckout();
});

When('el usuario completa la información de compra', async function () {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.location.zipCode('#####')
    await checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
    await checkoutPage.confirmOrder();
});

Then('debe ver el mensaje de confirmación de compra', async function () {
    const isVisible = await checkoutPage.hasConfirmationMessage();
    expect(isVisible).toBeTruthy();
});