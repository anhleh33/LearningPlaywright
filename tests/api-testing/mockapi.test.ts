import { test, expect } from '@playwright/test';
import globalSetup from '../running-mutiple-enviroment/global-setup';

test("Mock API Response", async ({ page }) => {
    // 1. Intercept the network request
    // The URL pattern needs to match your API endpoint (e.g., * represents wildcards)
    // If your API is 'https://api.example.com/books', you can use '**\/books'
    await page.route("**\/books", async (route) => {

        // 2. Fulfill the request with your Mock Data
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            path: "./tests/api-testing/booksApi.json"
        });
    });

    // 3. Navigate to the page
    // The page will now load using the data from booksApi.json, NOT the real server.
    await page.goto("http://localhost:3000/books");

    // 4. Verify the UI
    // Example: Check if the books are displayed
   const content = await page.textContent("body");
    console.log("Mocked Data on Screen:", content);

    // Verify your mock data was served
    await expect(content).toContain("Playwright for Beginners");
});