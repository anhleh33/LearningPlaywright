//THIS FILE IS STIMULATED BASED ON A LOGIN FORM IN A PROJECT 
//HeaderPage, LoginPage, CommonFunction

import { test, expect } from '@playwright/test';
import Env from '../../utils/enviroment';
import HeaderPage from '../../page/Header.page';
import LoginPage from '../../page/Login.page';
import CommonFunction from '../../page/Common.page';
import * as data from '../../data/login.cred.json';

test.describe("T001", () => {
    let header: HeaderPage
    let login: LoginPage
    let common: CommonFunction

    test.beforeEach((async ({ page }) => {
        await page.goto(Env.test)

        header = new HeaderPage(page)
        login = new LoginPage(page)
        common = new CommonFunction(page)
    }))

    test("Login positive _ JIRA101", async ({ page }) => {
        await expect(page.url()).toBe('https://letcode.in/')
        await header.clickLoginLink()
        await expect(page.url()).toBe('https://letcode.in/signin')
        await login.enterUserName(data.email)
        await login.enterUserPassword(data.pass)
        await login.clickLoginBtn();
        const toasterText = await (await common.toaster).textContent();
        await expect(toasterText).toContain("Welcome")
        await header.clickSignoutLink() 
    })

    test('Login again', async({page})=> {
        await expect(page.url()).toBe('https://letcode.in/')
        await login.login('koushik1@letcode.in', 'Pass123$')
    })
})