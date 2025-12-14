import { test, chromium, expect } from "@playwright/test";

test.describe('Drag and drop an item inside a box', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/draggable')
    })

    test('My drop test', async ({ page }) => {
        const item = await page.locator('#sample-box').boundingBox()
        const box = await page.locator('.example-boundary').boundingBox()

        const startX = item.x + item.width /2 
        const startY = item.y + item.height/2
        const targetX = box.x + box.width/2
        const targetY = box.y + box.height/2

        await page.mouse.move(startX, startY)
        await page.mouse.down()

        await page.mouse.move(targetX, targetY, { steps: 100 })
        await page.mouse.up()
    })
})