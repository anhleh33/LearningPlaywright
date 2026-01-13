import { test, expect } from '@playwright/test';

test("Custom Reporter Demo", async ({ page }) => {
    await test.step("1. Open the website", async () => {
        await page.goto("https://letcode.in/edit");
    });
    await test.step("2. Fill in the full name", async () => {
        await page.locator("#fullName").fill("Koushik Chatterjee");
    });
    await test.step("3. Append text and verify", async () => {
        const input = page.locator("#join");
        await expect(input).toHaveValue(" I am good");
    });
});