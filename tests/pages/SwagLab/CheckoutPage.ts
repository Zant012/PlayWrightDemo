import { type Locator, type Page } from "@playwright/test";
export class CheckoutPage{
    readonly page:Page;
    readonly CheckoutButton: Locator;
    readonly CheckOutFirstName: Locator;
    readonly CheckOutLastName: Locator;
    readonly CheckOutZip: Locator;
    readonly ContinueButton: Locator;
    readonly FinishCheckout: Locator;
    readonly BackHome: Locator;
    readonly ConfirmOrderMessage: Locator;

    constructor(page:Page){
    this.page=page;
    this.CheckoutButton = page.locator('[data-test="checkout"]');
    this.CheckOutFirstName = page.locator('[data-test="firstName"]');
    this.CheckOutLastName = page.locator('[data-test="lastName"]');
    this.CheckOutZip= page.locator('[data-test="postalCode"]');
    this.ContinueButton= page.locator('[data-test="continue"]');
    this.FinishCheckout= page.locator('[data-test="finish"]');
    this.BackHome= page.locator('[data-test="back-to-products"]');
    this.ConfirmOrderMessage = page.locator('[data-test="complete-header"]');

    }

    async ClickCheckout(){
        await this.CheckoutButton.click();
    }

    async FillFirstName (){
        await this.CheckOutFirstName.fill('Santiago');
    }

    async FillLastName(){
        await this.CheckOutLastName.fill('Llanos')
    }

    async FillZipCode(){
        await this.CheckOutZip.fill('1234');
    }

    async ClickContinue(){
        await this.ContinueButton.click();
    }

    async ClickFinish(){
        await this.FinishCheckout.click();
    }

    async ClickHome(){
        await this.BackHome.click();
    }

}