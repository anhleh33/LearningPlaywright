import { test, expect } from '@playwright/test'
import clipboard from 'clipboardy';

test.describe('Clipboardy Tests', () => {
    test("Read from Clipboard", async ({ page }) => {
        await page.goto("https://clipboardjs.com/");


        await page.click("body > main > pre:nth-child(6) > button");
        const text = clipboard.readSync();

        console.log("Clipboard Text:", text);
        await expect(text).toBe("npm install clipboard --save");
    });

    test("Open Copied URL in New Tab", async ({ page, context }) => {
        // 1. Copy the URL (Hypothetical action)
        await page.goto("https://clipboardjs.com/");
        await page.click("#example-target > div > span > button"); // Click the button that copies a URL

        // 2. Read the URL from clipboard
        const copiedUrl = clipboard.readSync();
        console.log("Copied URL:", copiedUrl);

        // 3. Open a NEW tab within the same browser context
        const newPage = await context.newPage();

        // 4. Navigate to that URL
        await newPage.goto(copiedUrl);

        // 5. Verify it opened correctly
        console.log("New Tab Title:", await newPage.title());
        await expect(newPage).toHaveURL("https://github.com/zenorocha/clipboard.js");
    });
});