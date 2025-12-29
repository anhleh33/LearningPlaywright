import { test } from '@playwright/test';

test("Wait for Alert (Explicit Wait)", async ({ page }) => {
    await page.goto("https://letcode.in/waits");

    await page.click("#accept");
    const dialog = await page.waitForEvent('dialog');

    console.log("Alert Message: " + dialog.message());
    await dialog.accept();
    console.log("Alert handled successfully.");
});

// BONUS: Code for Screenshots (Part 55)
test("Screenshots Demo", async ({ page }) => {
    await page.goto("https://github.com/microsoft/playwright");

    await page.screenshot({ path: './img/visible-page.png' });

    await page.screenshot({ path: './img/full-page.png', fullPage: true });

    await page.locator('.BorderGrid').first().screenshot({ path: './img/element.png' });
    await page.screenshot({
        path: './img/masked.png',
        mask: [page.locator('.hide-sm.hide-md')]
    });
});