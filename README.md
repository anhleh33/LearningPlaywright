Youtube video link: https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD

# Install Jest (Javascript framework)
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
npm install -g allure-commandline --save-dev
```

# Install Winston
Install Winston 
```
npm install --save-dev winston
```