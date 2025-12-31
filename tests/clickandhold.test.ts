import { test, expect } from '@playwright/test';

test("Button Hold - Smart Wait", async ({ page }) => {
    await page.goto("https://letcode.in/button");

    const button = page.locator("h2:has-text('Button Hold!')");
    const box = await button.boundingBox();

    if (box) {
        // 1. Position mouse and Press Down
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        
        // 2. DO NOT use waitForTimeout(3000) here!
        
        // 3. WAIT for the specific element to appear
        // This keeps holding the button until the text shows up.
        // It's faster and 100% reliable.
        const successMessage = page.locator("h2", { hasText: "Button has been long pressed" });
        await successMessage.waitFor({ state: "visible", timeout: 10000 });

        // 4. Release ONLY after we see the success message
        await page.mouse.up();
        
        console.log("Success message appeared!");
    }
});