import { test, chromium, expect } from "@playwright/test";

test.describe('Handling dropdown', () => {
    test.beforeEach((async ({ page }) => {
        await page.goto('https://letcode.in/dropdowns')
    }))

    test("Select dropdown based on the value", async ({ page }) => {
        const fruits = page.locator('#fruits')
        await fruits.selectOption({ label: "Orange" })
        // await fruits.selectOption("3")
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

    test('Count the selected value by length', async ({ page }) => {
        const lang = await page.$$("#lang option")
        await expect(lang.length).toBe(5)

        console.log(`\nFound ${lang.length} programming language. Listing them now:`);
        console.log('--------------------------------------------------');
        for (let element of lang) {
            let label = await element.textContent()
            let value = await element.getAttribute('value')
            console.log(`Label: ${label}, Value: ${value}`);
        }
        console.log('--------------------------------------------------');
    })

    test('Count selected value by count', async ({ page }) => {
        const lang = await page.locator('#lang option').all()
        await expect(page.locator('#lang option')).toHaveCount(5)

        await page.locator('#lang').selectOption({index: lang.length - 1})
        await expect(page.locator('.notification.is-success')).toContainText('C#')

        console.log(`\nFound ${await lang.length} programming language. Listing them now:`)
        console.log('--------------------------------------------------');
        for(let element of lang){
            let label = await element.textContent()
            let value = await element.getAttribute('value')
            console.log(`Label: ${label}, Value: ${value}`);
        }
        console.log('--------------------------------------------------');
    })

    test('Get selectected text', async({page}) => {
        await page.selectOption("#country", "India")
        const text = await page.$eval<string, HTMLSelectElement>('#country', ele => ele.value)
        console.log(`Selected country is: ${text}`)
        await expect(text).toBe("India")
    })

})