import { test, expect } from '@playwright/test';

test.describe('Handling Alerts & Dialogs', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/alert');
    });

    test('Handle Simple Alert (Accept)', async ({ page }) => {
        // 1. Setup the listener BEFORE the action
        page.on('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            expect(dialog.type()).toContain('alert');
            
            // Click "OK"
            await dialog.accept();
        });

        // 2. Trigger the alert
        await page.locator('#accept').click();
    });

    test('Handle Confirm Alert (Dismiss/Cancel)', async ({ page }) => {
        page.on('dialog', async dialog => {
            console.log(`Confirm message: ${dialog.message()}`);
            expect(dialog.type()).toContain('confirm');
            
            await dialog.accept();
        });

        await page.locator('#confirm').click();
    });

    test('Handle Prompt Alert (Type & Accept)', async ({ page }) => {
    page.on('dialog', async dialog => {
        console.log(`Prompt message: ${dialog.message()}`);
        
        await dialog.accept('Koushik Chatterjee'); 
    });

    await page.locator('#prompt').click();
    
    await expect(page.locator('#myName')).toHaveText(/Koushik Chatterjee/);
});

    test('Handle Modern Modal (Not a real alert)', async ({ page }) => {
        // Modern modals ARE part of the HTML, so we treat them like normal elements
        await page.locator('#modern').click();
        
        // Wait for the modal to be visible and verify text
        const modal = page.locator('.modal-content');
        await expect(modal).toBeVisible();
        await expect(modal).toContainText('Modern Alert');

        // Close it using the button inside the modal
        await page.locator('button[aria-label="close"]').click();
        await expect(modal).toBeHidden();
    });
});
