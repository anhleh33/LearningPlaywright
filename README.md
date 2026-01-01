Youtube video link: https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD

# Install Jest
Instal Jest
```
npm install --save-dev jest
```
Install ts-test
```
npm install --save-dev ts-jest @types/jest
```
Run the test 
```
npm test
```
Test specific test file
```
npm test -- <path/to/file.js>
```
Retries running test case if it is failed
```
npx playwright test --retries=3
```

# Install Allure Report 
Install Allure 
```
npm install --save-dev @playwright/test allure-playwright
```
Check Allure version
```
allure --version
```
View Allure report (must already have tests before)
```
allure serve allure-results
```
Install Allure commandline
```
npm install allure-commandline --save-dev
```

# Install Winston Logger
Install Winston 
```
npm install --save-dev winston
```

# How to view trace.zip
```
npx playwright show-trace trace.zip
```

# Install Parallel
```
npm install parallel --save-dev
```
Note: the script can not run in case using "Show browser" and worker in playwright config must be above 1 (based on all TCs that is being run)
```
npm test tests/parallel.test.ts
```

# Install Clipboardy
```
npm install clipboardy --save-dev
```
# Install ADM-Zip
```
npm install adm-zip --save-dev
npm install @types/adm-zip --save-dev
```
Use it to export a result report, but just available only when running command for test