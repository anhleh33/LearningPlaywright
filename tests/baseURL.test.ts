import { test } from '@playwright/test';

test("Goto signup page", async({page}) => {
    await page.goto("/button")
})