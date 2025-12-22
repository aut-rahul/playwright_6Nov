/*
locator - Email, Password, Radio Button, Button (Sign In)
function - action on Sign In
*/ 

    const UsingGridEmail=await page.locator('#inputEmail1');
    const UsingGridPassword= page.locator('#inputPassword2');
    const UsingGridFirstRadioBttn= page.locator("//span[text()='Option 1']");
    const UsingGridSeconRadioBttn= page.locator("//span[text()='Option 1']");
    const UsingGridSignIn= page.locator("//button[text()='Sign in']").nth(0);