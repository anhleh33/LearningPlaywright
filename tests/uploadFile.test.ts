import { test, chromium, expect } from "@playwright/test";
import { describe } from "node:test";

describe("Upload File Test", () => {
    test('Upload File to the site', async () => {
        const filePath = './videos/a.webm';
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto('https://www.sendgb.com/')
        await page.setInputFiles('(//input[@name="files[]"])[1]', filePath)
    });
});