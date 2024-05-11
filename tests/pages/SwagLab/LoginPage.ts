import { type Locator, type Page } from "@playwright/test";
export class LoginPage{
    readonly page:Page;
    readonly FieldUsername: Locator;
    readonly FieldPassword: Locator;
    readonly LoginButton: Locator;
    readonly SideMenu: Locator;
    readonly LogOut: Locator;
    readonly InvalidLoginMsj: Locator;

    constructor(page:Page){
        this.page=page;
        this.FieldUsername = page.locator('[data-test="username"]');
        this.FieldPassword = page.locator('[data-test="password"]');
        this.LoginButton  = page.locator('[data-test="login-button"]');
        this.SideMenu = page.getByRole('button', { name: 'Open Menu' });
        this.LogOut= page.locator('[data-test="logout-sidebar-link"]');
        this.InvalidLoginMsj = page.locator('[data-test="error"]');
    }

    async FillUsername (username){
        await this.FieldUsername.fill(username);
    }

    async FillPassword (){
        await this.FieldPassword.fill('secret_sauce');
    }

    async ClickButton(){
        await this.LoginButton.click()
    }

    async OpenSideMenu(){
        await this.SideMenu.click();
    }

    async UserLogOut(){
        await this.LogOut.click();
    }


}