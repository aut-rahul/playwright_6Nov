const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { RegisterPage } = require('../pages/RegisterPage');
const ExcelReader = require('../utils/excelReader');
const { allure } = require('allure-playwright');

test('User Registration Test', async ({ page }) => {



    const allData = ExcelReader.readExcel('test-data/userData.xlsx', 'Users');

    const data = allData[0];

    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);

    // Step 1: Open the application
    await homePage.goto();

    // Step 2: Navigate to Register Page
    await homePage.navigateToRegisterPage();

    // Step 3: Fill Registration Form
    await registerPage.fillRegistrationForm(data);

    // Step 4: Submit Registration Form

    await registerPage.submitRegistration();

    // Step 5: Verify Registration Success by checking the page title
    const actTitle = await page.title();
    console.log('Actual Page Title after Registration: ' + actTitle);

    const expTitle = 'Register Account';
    //console.log('Page Title after Registration: ' + title);
    //if (expTitle === actTitle) {
    //    console.log('Registration Test Passed');
    //} else {
    //    console.log('Registration Test Failed');
    //}

     await expect(page).toHaveTitle(expTitle);
    expect(page.expTitle===actTitle);

    //Your Account Has Been Created!


    //waitForResponse: used to wait for a network response.   
    //await page.waitForResponse(response => 
    // response.url().includes('route') && response.status() === 200);
});