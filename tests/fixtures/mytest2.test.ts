import test, { expect } from "./basPage"
import * as data from '../../data/login.cred.json';

test.beforeEach(async({page}) => {
    await page.goto("https://letcode.in") 
})

test("test 1", async ({ headerPage, loginPage, commonPage, page }) => {
    await headerPage.clickLoginLink()
    await expect(page.url()).toBe('https://letcode.in/signin')
    await loginPage.enterUserName(data.email)
    await loginPage.enterUserPassword(data.pass)
    await loginPage.clickLoginBtn();
    const toasterText = await (await commonPage.toaster).textContent();
    await expect(toasterText).toContain("Welcome")
    await headerPage.clickSignoutLink()
})