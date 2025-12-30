import {expect, test} from '@playwright/test'

test.describe.parallel('Parallel', () => {
    test("goto letcode", async ({page}) => {
        await page.goto("https://letcode.in/")
        console.log("Title of the page is: ", await page.title())
        expect(await page.title()).toBe("LetCode - Playground for Developers")
    })

    test("goto playwright", async ({page}) => {
        await page.goto("https://playwright.dev/")
        console.log("Title of the page is: ", await page.title())
        expect(await page.title()).toBe("Playwright")
    })

    test("goto google", async ({page}) => {
        await page.goto("https://www.google.com/")
        console.log("Title of the page is: ", await page.title())
        expect(await page.title()).toBe("Google")
    })
}