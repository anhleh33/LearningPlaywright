import { test, chromium, expect } from "@playwright/test";

test.describe('Handling dropdown', () => {
    test.beforeEach((async ({ page }) => {
        await page.goto('https://letcode.in/dropdowns')
    }))

    test("Select dropdown based on the value", async ({ page }) => {
        const fruits = page.locator('#fruits')
        await fruits.selectOption("2")
        const msg = await page.locator('.notification.is-success')
        await expect(msg).toContainText("Orange");
    })

    test('Select multiple dropdown of heroes', async({page}) => {
        const heroes = page.locator('#superheros')

        await expect(heroes).toBeVisible()
    })
})