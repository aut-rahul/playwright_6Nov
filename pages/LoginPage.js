class LoginPage{
    constructor(page){
        this.page=page;
        

        // Login Form Locators
        this.emailInput= page.locator('#input-email');
        this.passwordInput= page.locator('#input-password');
        this.loginBtn= page.locator("input[value='Login']");

    }

    // Test Step: Fill Login Form
    async fillLoginForm(email,password){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }
    // Test Step: Submit Login Form
    async submitLogin(){
        await this.loginBtn.click();
    }
}
module.exports={LoginPage};