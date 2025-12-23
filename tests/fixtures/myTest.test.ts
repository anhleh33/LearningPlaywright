import { fixture as test, expect }from './fixtures'

test('Test sử dụng fixture tùy chỉnh', async ({ hey, page }) => {
    // Playwright sẽ tự động hiểu 'hey' là gì nhờ vào file .ts bạn đã viết
    console.log(hey); // In ra: "I am letcode"
    await expect(hey).toBe("I am letcode");
});