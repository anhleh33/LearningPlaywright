import { test, expect } from '@playwright/test';
import { waitForDebugger } from 'inspector';

test('Locators', async ({ page }) => {
  await page.goto("https://letcode.in/dropdowns")

  const dropdown = await page.getByRole('combobox', { name: 'Select Fruit' });
  await dropdown.selectOption({ label: 'Orange' });
});

test('test codeg', async ({ page }) => {
  await page.goto('https://dkq832w8boiiy.cloudfront.net/#/login');
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('testuser@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('12345678x@X');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
});

test('test', async ({ page }) => {
  await page.goto('https://letcode.in/dropdowns');
  await page.locator('#fruits').selectOption('2');
  await page.locator('#superheros').selectOption('aq');
  await page.locator('#lang').selectOption('swift');
  await page.getByRole('link', { name: 'Work-Space' }).click();
});

test.only('Playwright web', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const langBtn = await page.getByRole('button', { name: "Node.js" });
  await expect(langBtn).toBeVisible();
  await langBtn.hover();
  const pythonOption = page.getByRole('link', { name: "Python" }).first();
  await expect(pythonOption).toBeVisible();
  await pythonOption.click();
  await expect(page).toHaveURL(/.*python/);
})