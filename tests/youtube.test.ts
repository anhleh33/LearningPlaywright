import {test} from '@playwright/test'

test("Calculate ytb playlist duration", async({page}) => {
    const url = 'https://www.youtube.com/watch?v=rUH1demFjQY&list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD&index=42'

    await page.goto(url)
    const videos = page.locator("#overlays > ytd-thumbnail-overlay-time-status-renderer > div.thumbnail-overlay-badge-shape.style-scope.ytd-thumbnail-overlay-time-status-renderer > badge-shape > div")
    console.log(await videos.count())
})