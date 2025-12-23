import { test, expect, Page } from "@playwright/test";

test.describe('Relative Locator', () => {
    let page: Page
    test.beforeAll(async({browser}) => {
        page = await browser.newPage()
        await page.goto('https://github.com/login')
    })

    test('Below', async() => {
        await page.fill("input:below(:text('Username or email address'))", 'ortoniKC')
        // await page.fill("input:below(body > div.logged-out.env-production.page-responsive.session-authentication > div.application-main > main > div > div.authentication-body.authentication-body--with-form.new-session > form > div:nth-child(2) > label)", 'ortoniKC')
    })

    test('Above', async() => {
        const passwordLabel = page.locator('label:above(#password)').first();
        await expect(passwordLabel).toContainText("Password");
    })

    test('Near', async() => {
        await page.click("a:near(:text('Password'))")
        // await page.waitForTimeout(5000)

        await expect(page).toHaveURL(/password_reset/)
    })

    test('Left-of', async() => {
        const forget_pwd = await page.locator("a:right-of(:text('Password'))")
        await forget_pwd.click()

        // not work because they are in the same node (div)
    })

    test('Right-of', async() => {
    })

    test('In depth', async() => {
        //use more Positional Selectors 
        // await page.fill("input:below(:text('Prof.')):right-of(:text('Vorname'))", "koushik")
    })

    test("Debugging", async() => {
        await page.fill("input:below(:text('Username or email address'))", 'ortoniKC')
        await page.pause()
        await page.fill("#password", "12345")
    }) //$env:PWDEBUG=1; npm run test
    
})