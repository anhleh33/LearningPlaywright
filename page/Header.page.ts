import { Page } from '@playwright/test';

export default class HeaderPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    //locators
    public get eleLoginBtn() {
        const loginBtn = this.page.locator('text = Log in')
        if (loginBtn != null)
            return loginBtn
        else
            throw new Error("No element")
    }
    public get eleSigoutBtn() {
        const signoutEle = this.page.locator('text = Sign out')
        if (signoutEle != null)
            return signoutEle
        else
            throw new Error("No element")
    }

    public async clickLoginLink() {
        const ele = await this.eleLoginBtn
        await ele.click()
    }
    public async clickSignoutLink() {
        const ele = await this.eleSigoutBtn
        await ele.click()
    }
}