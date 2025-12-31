import { test } from '@playwright/test';

test.describe("Network Blocker Test Suite", () => {
    test("Speed Test - Block Images", async ({ page }) => {
        // 1. Intercept network requests
        await page.route("**/*", (route) => {
            // 2. Check if the resource type is an image
            if (route.request().resourceType() === 'image') {
                console.log(`Blocking Image: ${route.request().url()}`);
                route.abort(); // 🚫 Stop it from loading
            } else {
                route.continue(); // ✅ Let everything else pass
            }
        });

        await page.goto("https://unsplash.com/t/people");
        // You will notice the page loads very fast, but looks "broken" (no icons/logos)
    });

    test("Clean Test - Block Ads", async ({ page }) => {
        // 1. Intercept network requests
        await page.route("**/*", (route) => {
            const url = route.request().url();

            // 2. Check if the URL contains common ad server names
            if (url.includes("googleads") ||
                url.includes("googlesyndication") ||
                url.includes("doubleclick")) {

                console.log(`Blocking Ad Request: ${url}`);
                route.abort(); // 🚫 Stop the ad request
            } else {
                route.continue(); // ✅ Let normal content pass
            }
        });

        await page.goto("https://unsplash.com/t/people");
        await page.waitForTimeout(5000);
        // The page should look normal, but without the specific ad banners defined above.
    });
});