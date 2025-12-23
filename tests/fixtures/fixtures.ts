import { test as base } from '@playwright/test';

type koushik = {
    hey: string;
};

// Chúng ta dùng 'base.extend' để tạo ra một "phiên bản test" mới có chứa 'hey'
export const fixture = base.extend<koushik>({
    hey: async ({}, use) => {
        // 'use' sẽ truyền giá trị này vào bài test khi nó được gọi
        await use("I am letcode"); 
    }
});

export const expect = fixture.expect;