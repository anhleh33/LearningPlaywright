import { Page } from '@playwright/test';

export default class LoginPage{
    private page: Page;
    constructor(page:Page){
        this.page = page
    }

    eleEmailTextField = async () => 
        await this.page.locator("input[name = 'email']")

    elePassTextField = async() => 
        await this.page.locator("input[name = 'password']")

    // public get eleEmailTextField () {
    //    const eleName = this.page.locator("input[name = 'email']")
    //    return eleName
    // }
    // public get elePassTextField() {
    //     return this.page.locator("input[name = 'password']")
    // }
    public get eleLoginBtn() {
        return this.page.locator("//button[text()='LOGIN]")
    }

    public async enterUserName(name: string){
        const ele = await this.eleEmailTextField
        if(ele != null)
            await ele.fill(name)
        else 
            throw new Error('No element, hence failed')
    }
    public async enterUserPassword(pass: string){
        const ele = await this.elePassTextField
        await ele?.fill(pass)
    }
    public async clickLoginBtn(){
        const ele = await this.eleLoginBtn
        await ele?.click()
    }

    public async login(username: string, pass: string){
        this.enterUserName(username)
        this.enterUserPassword(pass)
        this.clickLoginBtn()
    }
}