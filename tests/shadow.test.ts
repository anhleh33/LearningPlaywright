import { test, chromium, expect } from "@playwright/test";

test.describe('Shadow DOM', () => {
    test('Interact with shadow DOM', async({page}) => {
        await page.goto('https://letcode.in/shadow')
        await page.fill('#fname', 'koushik')
        await page.waitForTimeout(3000)
    })
})