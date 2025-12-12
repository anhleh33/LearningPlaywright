import { test, expect } from "@playwright/test";
import { log } from "console";

test.describe('Window Handling Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/window');
    });

    test('Verify Parent Page Title', async ({ page }) => {
        await expect(page).toHaveTitle('Windows | LetCode with Koushik');
    });

    test('Single Page Handling and Navigation', async ({ page, context }) => {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            page.click('#home')
        ]);

        // 'networkidle' is recommended to ensure all scripts and data have finished loading.
        console.log('New window captured. Waiting for network stability...');
        //networkidle, load (default), domcontentloaded
        await newWindow.waitForLoadState('networkidle');
        console.log('New window is stable. Resuming test actions.');

        await expect(newWindow).toHaveURL(/test/);
        await page.bringToFront()

        await expect(newWindow.locator('.title.has-text-centered')).toHaveText("Ready to be a Pro Engineer?")

        await newWindow.close();
    });

    test('Multiple Page Handling and Navigation', async ({ page, context }) => {
        const [multiplepage] = await Promise.all([
            context.waitForEvent("page"),
            await page.click('#multi')
        ])
        await multiplepage.waitForLoadState("domcontentloaded");
        const pages = multiplepage.context().pages()
        console.log(`no. of windows: ${pages.length}`);
        pages.forEach(page => {
            console.log(page.url())
        })

        await pages[1].bringToFront()
        pages[1].on("dialog", (dialog) => {
            console.log(`Message: ${dialog.message}`)
            console.log(`Default Value: ${dialog.defaultValue}`)
            console.log(`Type: ${dialog.type()}`)
            dialog.accept('hello koushik')
        })
        await pages[1].click('#accept')
    })
});