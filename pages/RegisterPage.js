class RegisterPage{

    constructor(page){
        this.page=page;
        //page object model for Register Page

    // Registration Form Locators

        this.firstName= page.getByPlaceholder('First Name');
        this.lastName= page.getByPlaceholder('Last Name');
        this.email= page.getByPlaceholder('E-Mail');
        this.password= page.getByPlaceholder('Password');
        // Agree Checkbox
        this.agree=page.locator("input[name='agree']");
        //Clcik on Continue Button
        this.continueBtn=page.locator("//button[text()='Continue']");

    }
    // Test Step: Fill Registration Form
    async fillRegistrationForm(data){

        const randomEmail= data.Email.replace("@", `+${Date.now()}@`);
        await this.firstName.fill(data.FirstName);
        await this.lastName.fill(data.LastName);
        await this.email.fill(randomEmail);
        await this.password.fill(data.Password);
        await this.agree.check();
    }
    // Test Step: Submit Registration Form
    async submitRegistration(){
        await this.continueBtn.click();
      
        // Apply expected "Your Account Has Been Created!"
    }

}
module.exports={RegisterPage};