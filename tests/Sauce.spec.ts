import {test,Browser, Page, expect} from '@playwright/test';
import { LoginPage } from './pages/SwagLab/LoginPage';
import { ItemesPage } from './pages/SwagLab/ItemsPage';
import { CheckoutPage } from './pages/SwagLab/CheckoutPage';
(async()=>{
    let browser : Browser;
    let page : Page;
    test.describe('Sauce Features',()=>{
        test('Login with valid user',async({page})=>{
            await test.step('User navigates to the saucelab site',async()=>{
                await page.goto('https://www.saucedemo.com/')
            })

            await test.step('User complete the login process',async()=>{
                const loginpage = new LoginPage(page);
                await loginpage.FillUsername('standard_user');
                await loginpage.FillPassword();
                await loginpage.ClickButton();
                const currentURL = page.url();
                await expect(currentURL).toBe('https://www.saucedemo.com/inventory.html');
                await loginpage.OpenSideMenu();
                await loginpage.UserLogOut();
                await page.close();
            })
        })

        test('Login with invalid user', async({page})=>{
            await test.step('User navigates to the saucelab site',async()=>{
                await page.goto('https://www.saucedemo.com/');
            })

            await test.step('User fills username and password with invalid data',async()=>{
                const loginpage = new LoginPage(page);
                await loginpage.FillUsername('dsdsd');
                await loginpage.FillPassword();
                await loginpage.ClickButton();
                await expect(loginpage.InvalidLoginMsj).toHaveText('Epic sadface: Username and password do not match any user in this service');
                await page.close();
            })
        })
        
        test('add a prodcut to the kart and purchase it',async({page})=>{
            await test.step('User goes to all products',async()=>{
                await page.goto('https://www.saucedemo.com/')
                const loginpage = new LoginPage(page);
                await loginpage.FillUsername('standard_user');
                await loginpage.FillPassword();
                await loginpage.ClickButton();
                const currentURL = page.url();
                await expect(currentURL).toBe('https://www.saucedemo.com/inventory.html');

            })

            await test.step('User add an item to the shopping kart and purchase it',async()=>{
                const itempage = new ItemesPage(page);
                await itempage.SelectItem();
                await itempage.GoToShoppingKart();
                const checkoutpage = new CheckoutPage(page);
                await checkoutpage.ClickCheckout();
                await checkoutpage.FillFirstName();
                await checkoutpage.FillLastName();
                await checkoutpage.FillZipCode();
                await checkoutpage.ClickContinue();
                await checkoutpage.ClickFinish();
                await expect(checkoutpage.ConfirmOrderMessage).toHaveText('Thank you for your order!')
                const loginpage = new LoginPage(page);
                await loginpage.OpenSideMenu();
                await loginpage.UserLogOut();
                await page.close();

            })
        
        })

        
    })
})();