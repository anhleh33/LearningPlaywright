import { test } from '@playwright/test';
import Environment from 'utils/Environment'

test('Login Test', async ({ page }) => {
    console.log(`Running on: ${Environment.BASE_URL}`);
    
    await page.goto(Environment.BASE_URL!);

    await page.fill('#username', Environment.DB_USER!);
    await page.fill('#password', Environment.DB_PASS!);
});