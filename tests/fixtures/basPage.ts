import HeaderPage from '../../page/Header.page';
import LoginPage from '../../page/Login.page';
import CommonFunction from '../../page/Common.page';

import {test as baseTexts} from '@playwright/test'
// var a
// var b: string

// type pages = {
//     loginPage: LoginPage;
//     headerPage: HeaderPage;
//     commonPage : CommonFunction;
// }

const test = baseTexts.extend<{
    loginPage: LoginPage;
    headerPage: HeaderPage;
    commonPage : CommonFunction;
}>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    },
    headerPage: async({page}, use) => {
        await use(new HeaderPage(page))
    },
    commonPage: async({page}, use) => {
        await use(new CommonFunction(page))
    }
})
export default test;
export const expect = test.expect;