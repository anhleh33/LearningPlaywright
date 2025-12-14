import { test, chromium, expect } from "@playwright/test";

test.describe('Drag an item into a square', () => {
    test.beforeEach(async({page}) => {
        await page.goto('https://letcode.in/droppable');
    })
    test('My drag test', async ({ page }) => {
        const src = page.locator('#draggable');
        const dst = page.locator('#droppable');

        const srcBound = await src.boundingBox();
        const dstBound = await dst.boundingBox();

        if (srcBound && dstBound) {
            const srcX_center = srcBound.x + srcBound.width / 2;
            const srcY_center = srcBound.y + srcBound.height / 2;

            const dstX_center = dstBound.x
            const dstY_center = dstBound.y;

            console.log(`Dragging from (${srcX_center}, ${srcY_center}) to (${dstX_center}, ${dstY_center})`);

            await page.mouse.move(srcX_center, srcY_center);
            await page.mouse.down();

            await page.mouse.move(dstX_center, dstY_center, { steps: 100 });
            await page.mouse.up(); 

        } else {
            throw new Error("Source or destination element not visible or found.");
        }
    })
})