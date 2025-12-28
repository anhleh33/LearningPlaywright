import { test } from '@playwright/test';

test("innerHTML vs innerText vs textContent", async ({ page }) => {
    // Navigate to the page
    await page.goto("http://localhost:5500/index.html");

    // Define the locator for the paragraph
    const element = page.locator("#attach");

    // 1. innerHTML
    // Fetches the complete HTML markup, including tags.
    await test.step("Get innerHTML", async () => {
        const val = await element.innerHTML();
        console.log(`innerHTML: ${val}`);
        // Output: hey <strong>there</strong><span style="display: none;">am i visible</span>
    });

    // 2. innerText
    // Fetches ONLY the visible text. It respects CSS (ignores hidden elements).
    await test.step("Get innerText", async () => {
        const val = await element.innerText();
        console.log(`innerText: ${val}`);
        // Output: hey there
    });

    // 3. textContent
    // Fetches ALL text, even if it is hidden. It strips out the tags.
    await test.step("Get textContent", async () => {
        const val = await element.textContent();
        console.log(`textContent: ${val}`);
        // Output: hey there am i visible
    });
});