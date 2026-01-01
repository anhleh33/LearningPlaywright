import {test, expect} from '@playwright/test'

test("Basic UI Verification - Edit", async({page}) => {
    await page.goto('https://letcode.in/edit')

    //isDisable()
    await expect(await page.isDisabled('#noEdit')).toBeTruthy()
    
    //isEditable()
    const edit = await page.isDisabled('#dontwrite')
    console.log('is edit? ' + edit)
    await expect(edit).toBeFalsy()
})

test("Basic UI Verification - Buttons", async({page}) => {
    await page.goto('https://letcode.in/button')

    //isEnable()
    const ele = await page.locator('#isDisabled').first()
    await expect(await ele.isEnabled()).toBeFalsy()

    // isVisible()
    console.log(`Enable: ${await ele.isEnabled()}`)
    console.log(`Visible: ${await ele.isVisible()}`)
    
    //isHidden()
})

test("Basic UI Verification - Radio", async({page}) => {
    await page.goto('https://letcode.in/radio') 

    //checkbox/radio check/uncheck
    //checkbox/radio isChecked
    const checkbox = await page.locator("input:below(:text('Find if the checkbox is selected?'))").first()
    // await expect(checkbox).toBeChecked()
    if(checkbox) {
        await expect(checkbox).toBeChecked()
        await checkbox.uncheck()
    }
    else throw new Error("Element not found")
})

test("Get CSS Value (Computed Style)", async ({ page }) => {
    await page.goto("https://letcode.in/button");

    // 1. Locate the element
    const button = page.locator("#home");

    // 2. Use evaluate to run JavaScript in the browser
    const color = await button.evaluate((element) => {
        // Native JS method to get all styles
        // 'element' here refers to the button we located above
        return window.getComputedStyle(element).getPropertyValue("background-color");
    });

    console.log(`Button Color: ${color}`);

    // 3. Assertion
    // Note: Browsers usually return colors in 'rgb(...)' format
    expect(color).toBe("rgb(39, 71, 84)"); 
});