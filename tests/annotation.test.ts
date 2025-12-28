import { test, expect } from '@playwright/test'

test.describe("Test Annotation", () => {
    test("first test", async ({ page }) => {
        console.log("first test running")
        await page.goto("https://letcode.in/")
        console.log("first test completed")
    })

    test("second test", async ({ page }) => {
        test.slow()
        console.log("second test running")
        await page.goto("https://playwright.dev/")
        console.log("second test completed")
    })

    test.only("second test only", async ({ page }) => {
        test.fail()
        console.log("second test running")
        await page.goto("https://playwright.dev/")
        console.log("second test completed")
        await expect(await page.title()).toBe("Fast and reliable end-to-end testing for modern web apps | Playwright")
    })

    test("third test", async ({ page, browserName }) => {
        console.log("Name: " + browserName)
        if(browserName === "chromium"){
            test.fixme()
            // test.skip()
        }

        console.log("third test running")
        await page.goto("https://letcode.in/")
        console.log("third test completed")
    })
})