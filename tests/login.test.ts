import { test, chromium, expect } from "@playwright/test";
import { describe } from "node:test";

describe("Login Test", () => {
    test('Login Leetcode', async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            recordVideo: { dir: 'videos/' }
        });
        let page = await context.newPage();

        await page.goto('https://leetcode.com/');
        await page.click('//*[@id="landing-page-app"]/div/div[1]/div[3]/div[1]/div/div/div[2]/div/a[5]/span');

        await page.fill('input#id_login', 'koushik350@gmail.com');
        await page.fill('input#id_password', 'Pass123$');
        // await page.locator('#tgnx8 > div > label > input[type=checkbox]').check()
        await page.click('signin_btn')
        //check toast msg
    });

    //npx playwright codegen https://leetcode.com/ 
    test('Recording script', async ({ page }) => {
        await page.goto('https://leetcode.com/');
        await page.getByRole('link', { name: 'Sign in' }).click();
        await page.locator('div').filter({ hasText: 'Sign InForgot Password?Sign' }).nth(5).click();
        // await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/ov2/av0/rch/beguu/0x4AAAAAAAQrSHUTor4iGTpW/light/fbE/new/normal?lang=en"]').contentFrame().locator('body').click();
        await page.getByRole('textbox', { name: 'Username or E-mail' }).click();
        await page.getByRole('textbox', { name: 'Username or E-mail' }).fill('helenjacqueline03us@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Pass123$');
        await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/ov2/av0/rch/beguu/0x4AAAAAAAQrSHUTor4iGTpW/light/fbE/new/normal?lang=en"]').contentFrame().locator('body').click();
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.locator('div').filter({ hasText: 'The e-mail address and/or' }).nth(4).click();
    });
});