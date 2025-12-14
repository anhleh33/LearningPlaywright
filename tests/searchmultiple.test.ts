import { test, expect } from '@playwright/test';

test.describe('Search Git repo', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/elements')

        const ele = page.locator("input[name='username']")
        await ele.fill('ortonikc')
        await page.locator('#search').click()
        // await page.waitForLoadState('networkidle');
    })

    test('Enter Git username', async ({ page }) => {
        await expect(page).toHaveURL(/elements/);
        await expect(page.locator('.container.mt-5')).toBeVisible()

        await page.locator("nav[role='navigation'].navbar").screenshot({path: `./img/${Date.now()}_header.png`})
    })

    test('Print all repos', async ({ page }) => {
        await expect(page).toHaveURL(/elements/);
        await page.waitForSelector('.box.ng-star-inserted', { timeout: 10000 })
        const repos = await page.locator('.box.ng-star-inserted').all()

        console.log(`No. of repos: ${repos.length}`)
        // for (const element of repos) {
        //     const text = await element.locator('.title').textContent()
        //     console.log(`Title of repo: ${text}`)
        //     const desc = await element.locator('.subtitle').textContent()
        //     console.log(`Description: ${desc}\n`)
        // }

        const allULLs = await Promise.all(repos.map(async (repo, i) => {
            return await repo.innerText()
        }))
        console.log(allULLs)

        await page.locator('.container.mt-5').screenshot({path: './img/' + Date.now() + 'repolist.png'})
    })

    test.afterEach(async({page}) => {
        await page.screenshot({path: './img/' + Date.now() + 'screenshot.png', fullPage: true})
    })
})