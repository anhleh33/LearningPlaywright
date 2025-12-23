import {expect, Page, test} from '@playwright/test';

test.describe('Suite demo', () => {
    let page: Page
    test.beforeAll(async({browser}) => {
        page = await browser.newPage();
        await page.goto("https://letcode.in")
    })
    test("Open letcode and verify title", async() => {
        const title = await page.title()
        await expect(title).toBe("LetCode with Koushik");
    });

    test("Open letcode and login", async() => {
        
    });
})