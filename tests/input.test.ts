import { test, expect } from '@playwright/test';

test.describe('Handling Inputs', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/edit');
    });

    test('Enter your full name', async ({ page }) => {
        // Modern Way: Use locator() instead of page.$
        await page.locator("//input[@class='input is-focused']").fill('Koushik Chatterjee');
    });

    test('Append text to the end', async ({ page }) => {
        const joinInput = page.locator('#join');

        // Focus and move to end
        await joinInput.focus();
        await page.keyboard.press('End');

        // Type adds text sequentially
        await joinInput.type(' Human');
        
        // Verification
        await expect(joinInput).toHaveValue(/Human$/);
    });

    test('Get text inside input', async ({ page }) => {
        const value = await page.getAttribute('#getMe', 'value');
        console.log(`Value is: ${value}`);
        
        // Modern Assertion
        await expect(page.locator('#getMe')).toHaveValue('ortonikc');
    });

    test('Clear the text', async ({ page }) => {
        await page.locator('#clearMe').fill('');
        
        // Verification
        await expect(page.locator('#clearMe')).toBeEmpty();
    });
});