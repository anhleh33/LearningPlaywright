import { test, expect } from '@playwright/test';

test.describe('Frames handling concept', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/frame')
    })

    test('Interact with frames', async ({ page }) => {
        const frame = await page.frameLocator('#firstFr');

        await frame.locator('body > app-root > app-frame-content > div > div > form > div:nth-child(1) > div > input').fill('koushik')
        await frame.locator('body > app-root > app-frame-content > div > div > form > div:nth-child(2) > div > input').fill('c')

        await expect(frame.locator('.title.has-text-info')).toContainText("koushik c")
        //inner frame
        const innerframes = await frame.locator('body > app-root > app-frame-content > div > div > div.container.has-text-centered.mb-4.mt-6 > iframe').all()
        const count = innerframes.length
        console.log(`No. of inner frames: ${count}`)
        await expect(count).toBe(1)
    })
})