import { test } from '@playwright/test'

test.describe("API Response test", () => {
    test("Read API Response", async ({ page }) => {
        await page.goto("https://letcode.in/elements")

        const [response] = await Promise.all([
            page.waitForResponse(res =>
                res.status() == 200 &&
                res.url().includes("api.github.com") &&
                res.body().then(b => {
                    return b.includes("Anh Hoang")
                })),
            page.fill("input[name='username']", "anhleh33"),
            page.click('#search')
        ])
        console.log("Captured URL:", response.url());
        console.log(await response.json())
    })
})