import { test, chromium, expect } from "@playwright/test";
import { describe } from "node:test";

describe("Launch Browser Test", () => {
    test('Open Leetcode', async ({page}) => {

        await page.goto('https://leetcode.com/');
        await page.screenshot({ path: 'leetcode_homepage.png' });
    });
});