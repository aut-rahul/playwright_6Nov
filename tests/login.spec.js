import{test, expect} from '@playwright/test';
const HomePage= require("../pages/HomePage");
const LoginPage= require("../pages/LoginPage");


test('Login Test', async ({ page }) => {

    const homePage = new HomePage.HomePage(page);
    const loginPage = new LoginPage.LoginPage(page);

    // Step 1: Open the application
    await homePage.goto();  // open the application

    // Step 2: Navigate to Login Page
    await homePage.navigateToLoginPage();  // navigate to login page

    // Step 3: Perform login actions
    await loginPage.fillLoginForm('ranjeet2@gmail.com', 'Surendra@123');

    // Step 4: Submit Login Form
    await loginPage.submitLogin();
    const actTitle = await page.title();
    console.log('Actual Page Title after Login: ' + actTitle);

    const expTitle='Account Login';
    if(expTitle===actTitle){
        console.log('Login Test Passed');
    }else{
        console.log('Login Test Failed');
    }


});