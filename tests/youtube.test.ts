import { test } from '@playwright/test'
import { time } from 'console'
import { setTimeout } from 'timers/promises'

const list = ["https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD", 
    "https://www.youtube.com/playlist?list=PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk", 
    "https://www.youtube.com/playlist?list=PL699Xf-_ilW6vI9FHmePi1TvKyzYATgXi"]
list.forEach((playlistUrl, index) => {
    test(`Calculate ytb playlist duration - ${index + 1}`, async ({ page }) => {
        // const url = 'https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD'
        await page.goto(playlistUrl)
        await page.waitForTimeout(5000);
        const videos = page.locator("#overlays > ytd-thumbnail-overlay-time-status-renderer > div.thumbnail-overlay-badge-shape.style-scope.ytd-thumbnail-overlay-time-status-renderer > badge-shape > div")
        console.log(await videos.count())
        let totalMinutes = 0

        await Promise.all(
            (await videos.all()).map(async ele => {
                const duration = await ele.innerText()
                const timeSlices = duration.trim().split(":")
                let minutes = 0
                let seconds = 0
                if (timeSlices.length == 2) {
                    minutes = Number(timeSlices[0])
                    seconds = Number(timeSlices[1])
                    minutes += seconds / 60
                }
                else if (timeSlices.length == 3) {
                    let hours = Number(timeSlices[0])
                    minutes = Number(timeSlices[1])
                    seconds = Number(timeSlices[2])
                    minutes += ((hours * 60) + (seconds / 60))
                }
                totalMinutes += minutes
            })
        )
        console.log(`Total minutes: ${totalMinutes}`)
        const hours = Math.floor((totalMinutes / 60))
        const minutes = Math.trunc(totalMinutes % 60)
        const seconds = Math.trunc((totalMinutes - Math.trunc(totalMinutes)) * 60)
        const title = await page.title()

        console.log(`${title} --> ${hours}h ${minutes}m ${seconds}`)
    })
})