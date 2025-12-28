import { test, expect } from '@playwright/test';

// Use .serial to group dependent tests
test.describe.serial("Dependent Tests Group", () => {

    test("Test 1: Login (Fails)", async ({ page }) => {
        await page.goto("https://letcode.in/");
        
        // This assertion will fail (expecting 'Welcome 1' but getting 'Welcome')
        // Because this fails, the next test will be SKIPPED.
        expect("Welcome").toBe("Welcome 1"); 
    });

    test("Test 2: Search Product", async ({ page }) => {
        // This code will NOT run because the previous test failed
        console.log("Searching for product...");
        await page.click("text=Product");
    });

});