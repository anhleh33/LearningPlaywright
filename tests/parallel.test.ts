import {expect, test} from '@playwright/test'

test.describe.parallel('Parallel (run code in the same time)', () => {
    test("goto letcode", async ({page}) => {
        await page.goto("https://letcode.in/")
        console.log("Title of the page is: ", await page.title())
        expect(await page.title()).toBe("LetCode with Koushik")
    })

    test("goto playwright", async ({page}) => {
        await page.goto("https://playwright.dev/")
        console.log("Title of the page is: ", await page.title())
        expect(await page.title()).toBe("Fast and reliable end-to-end testing for modern web apps | Playwright")
    })

    test("goto google", async ({page}) => {
        await page.goto("https://www.google.com/")
        console.log("Title of the page is: ", await page.title())
        expect(await page.title()).toBe("Google")
    })
});