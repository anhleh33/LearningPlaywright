import { test, expect } from "@playwright/test";

//npx playwright codegen --save-storage=auth.json
//npx playwright open --load-storage=auth.json my.web.app

test.describe('Skip login', () => {
    test('Saucedemo skip login', async({browser}) => {
        const context = await browser.newContext({
            storageState: "./auth.json"
        })
        const page = await context.newPage()
        await page.goto('https://www.saucedemo.com/')
        await page.waitForTimeout(5000)
    })
})
