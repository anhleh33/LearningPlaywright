import { expect, test } from '@playwright/test'

test.describe.parallel('Parallel (run code in the same time)', () => {
    test.beforeEach(async ({ }, testInfo) => {
        console.log(`\n🚀 [Worker ${testInfo.workerIndex}] Starting test: "${testInfo.title}"`);
    });
    test("Test A: Login", async ({ page }, testInfo) => {
        // You can also access it here correctly (as the 2nd arg)
        console.log(`   ▶️ [Worker ${testInfo.workerIndex}] is running logic for Login...`);
        await page.goto("https://letcode.in/");
    });

    test("Test B: Signup", async ({ page }, testInfo) => {
        console.log(`   ▶️ [Worker ${testInfo.workerIndex}] is running logic for Signup...`);
        await page.goto("https://playwright.dev/");
    });

    test("Test C: Search", async ({ page }, testInfo) => {
        console.log(`   ▶️ [Worker ${testInfo.workerIndex}] is running logic for Search...`);
        await page.goto("https://google.com/");
    });
});