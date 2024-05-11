import { type Locator, type Page } from "@playwright/test";
export class ItemesPage{
    readonly page:Page;
    readonly item:Locator;
    readonly shoppingKart: Locator;

    constructor(page:Page){
        this.page=page; 
        this.item= page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.shoppingKart= page.locator('[data-test="shopping-cart-link"]');
    }

    async SelectItem(){
        await this.item.click()
    }

    async GoToShoppingKart(){
        await this.shoppingKart.click()
    }
 

}