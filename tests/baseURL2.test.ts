import { test } from '@playwright/test';

test.use({
    baseURL: "https://letcode.in"
})

test("Goto button page", async({page}) => {
    await page.goto("/button")
})