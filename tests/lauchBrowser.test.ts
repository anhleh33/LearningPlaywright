import { test, chromium, expect } from "@playwright/test";
import { describe } from "node:test";

describe("Launch Browser Test", () => {
    test('Open Leetcode', async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        let page = await context.newPage();

        await page.goto('https://leetcode.com/');
        await page.screenshot({ path: 'leetcode_homepage.png' });
        await browser.close();
    });
});