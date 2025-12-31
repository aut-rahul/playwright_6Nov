/*
locator - Email, Password, Checkbox, Button(Sign In)
function - action on Sign In
*/

class HorizontalForm{
    constructor(page){
        this.page=page;
    const horizontalform=page.locator('nb-card', { hasText: 'Horizontal form' });
    this.email=horizontalform.locator('#inputEmail3');
    this.pass= horizontalform.locator('#inputPassword3');
    this.checkbox= horizontalform.locator("//span[text()='Remember me']");
    this.signInButton= horizontalform.locator("//button[@status='warning' and text()='Sign in']");
    }
    async goto(){
        await this.page.goto('http://localhost:4200/pages/forms/layouts');
    }   
    async fillHorizontalForm(data){
        await this.email.fill(data.Email);
        await this.pass.fill(data.Password);
    }
    async checkBoxClick(){
        await this.checkbox.click();
    }
    async submitHorizontalForm(){
        await this.signInButton.click();
    }
}
module.exports={HorizontalForm};