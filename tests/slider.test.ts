import { test, expect } from '@playwright/test';

test("Automate Slider - Move by Coordinates", async ({ page }) => {
    // 1. Go to the slider demo page
    await page.goto("https://www.groww.in/calculators/sip-calculator"); 

    // 2. Define the Target (Where we want to stop)
    const targetAmount = "50000";
    let isCompleted = false;

    // 3. Locate the Slider Handle and the Value Text
    const sliderHandle = page.locator(".cis93SliderTrack.cis93SliderTrack-1").first(); 
    const amountText = page.locator("#MONTHLY_INVESTMENT");

    // 4. Loop until we reach the target
    while (!isCompleted) {
        // Get the current position of the slider handle
        let boundingBox = await sliderHandle.boundingBox();

        if (boundingBox) {
            // Move Mouse to the Center of the slider handle
            await page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
            
            // Press Mouse Down
            await page.mouse.down();
            
            // Move Mouse slightly to the RIGHT (Positive X)
            // The value '15' is the "Trial and Error" number found in the video.
            // Adjust this: Bigger number = Faster movement, Smaller number = More precision.
            await page.mouse.move(boundingBox.x + boundingBox.width / 2 + 15, boundingBox.y + boundingBox.height / 2);
            
            // Release Mouse
            await page.mouse.up();
        }

        // Check if we reached the target
        const currentText = await amountText.inputValue(); // or .textContent() depending on element
        console.log(`Current Value: ${currentText}`);

        if (currentText >= targetAmount) {
            isCompleted = true;
        }
    }

    console.log("Slider reached the target value!");
});