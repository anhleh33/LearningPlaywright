import { _android as android, } from 'playwright';
import { test } from "@playwright/test";

test("Run in Android - Chrome", async () => {
    // Connect to the device.
    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);

    // Launch Chrome browser.
    await device.shell('am force-stop com.android.chrome');
    const context = await device.launchBrowser();

    // Use BrowserContext as usual.
    const page = await context.newPage();
    test.slow()
    console.log("second test running")
    await page.goto("https://playwright.dev/")
    console.log("second test completed")

    await device.screenshot({ path: 'device.png' });
})
