/*
locator - Name, Email, Checkbox, Button (submit)
function - action on Submit
*/
class InlineForm{
    constructor(page){
        this.page=page;
    const inlineform=page.locator('nb-card', { hasText: 'Inline form' });
    this.firstName= inlineform.getByPlaceholder('Jane Doe');
    this.email= inlineform.getByPlaceholder('Email');
    this.rememberMe= inlineform.locator('.custom-checkbox');
    this.submitBttn= inlineform.locator("//button[text()='Submit']");

    }

    async goto(){
        await this.page.goto('http://localhost:4200/pages/forms/layouts');
    }

    async checkBoxClick(){
        await this.rememberMe.click();
    }

    async submitInlineForm(){
        await this.submitBttn.click();

    }

    async fillInlineForm(data){
        await this.firstName.fill(data.FirstName);
        await this.email.fill(data.Email);
    }

}
module.exports={InlineForm};