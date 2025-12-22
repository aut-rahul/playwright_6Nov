/*
1. What we want to test --
- Register
- Login

Register: homepage.js : how to test registration functionality 
1. Open browser : {page}
2. Go to URL :  await page.goto('http://rahulhub.com/ecom');
async function goto() {
    await  page.goto('http://rahulhub.com/ecom');
    }



3. Click on Register link : MyAccount -> Register
 const MyAccount= page.locator("//span[text()='My Account']")
 const Register= page.getByRole('link', { name: 'Register' });

 async function navigateToRegisterPage() {
    await MyAccount.click();
    await Register.click();
}
 

4. Fill the registration form
  const  firstName= page.getByPlaceholder('First Name');
  const  lastName= page.getByPlaceholder('Last Name');
  const  email= page.getByPlaceholder('E-Mail');
  const  password= page.getByPlaceholder('Password');
    // Agree Checkbox
  const  agree=page.locator("input[name='agree']");
    //Clcik on Continue Button
  const  continueBtn=page.locator("//button[text()='Continue']");

async function fillRegistrationForm(){
  await firstName.fill('testFirstName');
  await lastName.fill('testLastName');
  await email.fill('email@example.com');
  await password.fill('password123');
  await agree.click();
  await continueBtn.click();

}


*/