import { test, chromium, expect } from "@playwright/test";
import { describe } from "node:test";

describe("Upload File Test", () => {
    test('Upload File using input file', async ({page}) => {
        const filePath = ['./videos/a.webm', './videos/b.webm', './videos/c.webm'];

        await page.goto('https://www.sendgb.com/')
        await page.setInputFiles('(//input[@name="files[]"])[1]', filePath)
        await page.waitForTimeout(10000)
    });

    test('Upload file using function', async ({ page }) => {
        const filePaths = ['./videos/a.webm', './videos/b.webm'];

        await page.goto('https://the-internet.herokuapp.com/upload');

        const fileChooserPromise = page.waitForEvent('filechooser');

        await page.click('#drag-drop-upload');
        const fileChooser = await fileChooserPromise;

        await fileChooser.setFiles(filePaths);
    });

    test.afterEach(async({page}) => {
        await page.screenshot({path: `./img/${Date.now()}_fs.png`, fullPage: true})
    })
});