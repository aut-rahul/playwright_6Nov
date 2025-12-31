/*
locator - Email, Password, Checkbox, Button(Submit)
function -action on Submit
*/

class BasicForm{
    constructor(page){
        this.page=page;
 
    const basicForm=page.locator('nb-card', { hasText: 'Basic form' });
    this.email=basicForm.locator('#exampleInputEmail1');
    this.pass= basicForm.locator('#exampleInputPassword1');
    this.checkbox= basicForm.locator("//span[text()='Check me out']");
    //await page.locator('button[status="danger"]').click();
    //await page.locator('.status-danger').click();
    this.submitButton= basicForm.locator("//button[@status='danger' and text()='Submit']");
    }

    async goto(){
        await this.page.goto('http://localhost:4200/pages/forms/layouts');
    }   

    async fillBasicForm(data){
        await this.email.fill(data.Email);
        await this.pass.fill(data.Password);
    }
    async checkBoxClick(){
        await this.checkbox.click();
    }
    async submitBasicForm(){
        await this.submitButton.click();
    }
}
module.exports={BasicForm};