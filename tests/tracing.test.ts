import { test, expect } from "@playwright/test";

// npx playwright show-trace trace.zip
test("Tracing", async({browser}) => {
    const context = await browser.newContext()
    await context.tracing.start({
        screenshots: true,
        snapshots: true
    })
    const page = await context.newPage()
    await page.goto("https://playwright.dev/")

    await context.tracing.stop({path: 'trace.zip'})
})