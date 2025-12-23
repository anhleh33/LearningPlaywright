import { test, expect } from "@playwright/test";

test.describe('Visual Comparison', () => {
    // npx playwright test --update-snapshots
    // npx playwright show-report
    test('toMatchSnapshot', async({page}) => {
        const filePaths = ['./videos/a.webm', './videos/b.webm'];

        await page.goto('https://the-internet.herokuapp.com/upload');

        const fileChooserPromise = page.waitForEvent('filechooser');

        await page.click('#drag-drop-upload');
        const fileChooser = await fileChooserPromise;

        await fileChooser.setFiles(filePaths);

        await expect(await page.screenshot({
            fullPage: true
        })).toMatchSnapshot("./img/1765678912626_fs.png")
    })

     test('toMatchSnapshot2', async({page}) => {
        await page.goto('https://leetcode.com/')

        await expect(await page.screenshot({
            fullPage: true
        })).toMatchSnapshot("./leetcode_homepage.png")
    })
    
})