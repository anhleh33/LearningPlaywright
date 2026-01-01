// global-teardown/global-teardown.ts
import { FullConfig } from '@playwright/test';
import AdmZip from 'adm-zip';
import * as fs from 'fs';
import * as path from 'path';

async function globalTeardown(config: FullConfig) {
    console.log('\n---------------------------------------------------------');
    console.log('🏗️  GLOBAL TEARDOWN: STARTING ZIP PROCESS');

    // 1. Get the ROOT folder based on this file's location
    // Since this file is in 'global-teardown/', we go up one level ('..') to get to Root.
    const projectRoot = path.resolve(__dirname, '..');

    // 2. Define the exact paths
    const reportPath = path.join(projectRoot, 'playwright-report');
    const zipPath = path.join(projectRoot, 'global-teardown-report.zip');

    console.log(`   📂 Project Root detected at: ${projectRoot}`);
    console.log(`   🔎 Looking for report at:    ${reportPath}`);

    // 3. Check and Zip
    if (fs.existsSync(reportPath)) {
        try {
            const zip = new AdmZip();
            zip.addLocalFolder(reportPath, 'playwright-report');
            zip.writeZip(zipPath);
            console.log(`   ✅ SUCCESS: Zip created at: ${zipPath}`);
        } catch (e) {
            console.error('   ❌ ERROR: Could not zip the file.', e);
        }
    } else {
        console.error('   ⚠️  WARNING: Report folder STILL NOT FOUND.');
        console.error('      (Please check if the folder "playwright-report" actually exists in your project root)');
    }
    console.log('---------------------------------------------------------\n');
}

export default globalTeardown;