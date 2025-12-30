import { test } from '@playwright/test';

test("Mouse Wheel & Bounding Box Demo", async ({ page }) => {
    // 1. Go to a page with scrollable content
    await page.goto("https://letcode.in/advancedtable");

    // 2. Locate an element (e.g., a specific row in a table)
    const targetRow = page.locator("tr").nth(5); // Get the 5th row

    // 3. Get the Bounding Box (x, y, width, height)
    const box = await targetRow.boundingBox();

    if (box) {
        console.log("Found element at:", box);

        // 4. Use the Mouse API to scroll (Vertical scroll)
        // Scroll down 200 pixels
        await page.mouse.wheel(0, 200);
        
        // 5. Move the mouse cursor to the center of that element
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        
        console.log("Mouse moved to element center!");
    } else {
        console.log("Element not visible yet!");
    }
});