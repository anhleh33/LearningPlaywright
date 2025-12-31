import { test, expect } from "@playwright/test";

test("Handle Basic HTTP Authentication", async ({ browser }) => {

    // 1. Create a new Browser Context with httpCredentials
    // This tells Playwright to automatically handle any auth pop-ups
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',      
            password: 'admin'       
        }
    });

    // 2. Create a new page from the authenticated context
    const page = await context.newPage();

    // 3. Navigate to the site that requires authentication
    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    // 4. Verify that login was successful
    // If successful, the page should display the specific header text
    await expect(page.locator("h3")).toContainText("Basic Auth");

    // Always close the context when finished
    await context.close();
});