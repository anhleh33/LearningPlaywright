import { test } from '@playwright/test';
import Tesseract from 'tesseract.js';
import path from 'path';

test("OCR - Read Text from Local Image", async () => { 
    // 1. Correct the path (Resolved to absolute path to be safe)
    // Assuming your image is in a folder named 'img' at the project root
    const imagePath = path.resolve(__dirname, '../img/leetcode_homepage.png'); 

    console.log(`Processing image at: ${imagePath}`);

    // 2. Perform OCR
    const { data: { text } } = await Tesseract.recognize(
        imagePath, 
        'eng', 
        { logger: m => console.log(m) }
    );
    
    console.log("---------------------------------------");
    console.log("Extracted Text:\n", text);
    console.log("---------------------------------------");
});