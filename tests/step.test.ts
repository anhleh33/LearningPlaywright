import { test } from '@playwright/test';

test("End to End Scenario with Steps", async ({ page }) => {

    // Step 1: Login
    await test.step("Login", async () => {
        await page.goto("https://letcode.in/");
        await page.click("text=Log in");
        await page.fill("input[name='email']", "koushik350@gmail.com");
        await page.fill("input[name='password']", "pass123$");
        await page.click("button:text('LOGIN')");
    });

    // Step 2: Search for a product
    await test.step("Search Product", async () => {
        // You can put complex logic here
        console.log("Step 2: Searching...");
        // await page.fill("#search", "phone");
    });

    // Step 3: Checkout
    await test.step("Checkout", async () => {
        console.log("Step 3: Checking out...");
        // await page.click("#checkout");
    });

});