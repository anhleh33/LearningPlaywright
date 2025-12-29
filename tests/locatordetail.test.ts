import { test } from '@playwright/test';

test("Locator API vs Element Handle (Working Version)", async ({ page }) => {
    
    // 1. Login to SauceDemo
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    const sortDropdown = page.locator(".product_sort_container");
    const firstProductPrice = page.locator(".inventory_item_price").first();

    console.log("Default Price: " + await firstProductPrice.textContent());

    await sortDropdown.selectOption("lohi");
    console.log("Low to High Price: " + await firstProductPrice.textContent());

    // --- THE PAGE REFRESHES (DOM RE-RENDERS) HERE ---
    await sortDropdown.selectOption("hilo");
    console.log("High to Low Price: " + await firstProductPrice.textContent());
});