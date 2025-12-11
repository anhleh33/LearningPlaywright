import { test, chromium, expect } from "@playwright/test";

test.describe('Handling dropdown', () => {
    test.beforeEach((async ({ page }) => {
        await page.goto('https://letcode.in/dropdowns')
    }))

    test("Select dropdown based on the value", async ({ page }) => {
        const fruits = page.locator('#fruits')
        await fruits.selectOption({ label: "Orange" })
        await fruits.selectOption("2")
        const msg = await page.locator('.notification.is-success')
        await expect(msg).toContainText("Orange");
    })

    test('Select multiple dropdown of heroes', async ({ page }) => {
        const heroes = page.locator('#superheros')
        await expect(heroes).toBeVisible()
        await heroes.selectOption([
            { label: "Aquaman" },
            { value: "bt" },
            { index: 8 }
        ])

        const selectedValues = await heroes.evaluate((select) => {
            const selectElement = select as HTMLSelectElement;
            const options = Array.from(selectElement.selectedOptions);
            return options.map(option => option.value);
        });

        console.log(selectedValues)

        await expect(selectedValues.length).toBe(3)
        await expect(selectedValues).toContain('aq');
        await expect(selectedValues).toContain('bt');
        await expect(selectedValues).toContain('dd');
        const displayText = page.locator('.content.ng-star-inserted');
        await expect(displayText).toContainText('Aquaman');
    })

    test('Count the selected value', async({page}) => {
        const lang = await page.$$("#lang option")
        console.log(lang.length)

        // const lang = page.locator('#lang')
        // console.log(lang.count())
    })
})