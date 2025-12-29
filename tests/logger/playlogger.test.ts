import { test, chromium } from '@playwright/test'; // Import chromium directly

test("Logger Test", async () => { // Remove '{ page }' fixture
    
    // 1. Launch the browser with the Logger
    const browser = await chromium.launch({
        logger: {
            isEnabled: (name, severity) => true,
            log: (name, severity, message, args) => {
                console.log(`[${name}] ${message} ${args.length ? JSON.stringify(args) : ''} servity: ${severity}`);
            }
        }
    });

    // 2. Create a Context and Page FROM THAT BROWSER
    const context = await browser.newContext();
    const page = await context.newPage(); // <--- Now this page has the logger attached

    // 3. Run your test actions on this new page
    await page.goto("https://letcode.in/elements");
    await page.locator("input[name='username']").fill("anhleh33");
    await page.locator('#search').click();

    // 4. Close the browser manually (since we launched it manually)
    await browser.close();
})

test("Read Browser Console Logs", async ({ page }) => {
    
    // 1. Listen for console messages
    page.on('console', async msg => {
        // Filter: Only show me Errors (ignore Warnings/Info)
        if (msg.type() === "error") {
            console.log(`Found Error: "${msg.text()}"`);
        }
    });

    // 2. Trigger an action that causes an error
    await page.goto("https://letcode.in/elements");
    await page.click("#search"); // This button click triggers a 404 error on the site

    // 3. Navigate to another page (Listener is still active!)
    await page.goto("https://amazon.in/non-existent-page");
});