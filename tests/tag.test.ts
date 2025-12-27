import {test, expect } from '@playwright/test'

test("Test signup page @smoke", async () => {
    console.log("some signup test...")
})

test("Test login page @sanity", async() => {
    console.log("some login test...")
})

test("Test login page @reg", async() => {
    console.log("some login test @reg...")
})

test("Test add to cart page @smoke", async({page}) => {
    console.log("Some add to cart test @smoke")
})