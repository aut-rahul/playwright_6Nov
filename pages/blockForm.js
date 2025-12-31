/*
locator - First Name, Last Name, Email, Website, Button (Submit)
function - action on Submit
*/

class BlockForm{
    constructor(page){
        this.page=page;
 
        const blockForm=page.locator('nb-card', { hasText: 'Block Form' });
        this.firstName=blockForm.getByPlaceholder('First Name');
        this.lastName=blockForm.getByPlaceholder('Last Name');
        this.email=blockForm.getByPlaceholder('Email');
        this.website=blockForm.getByPlaceholder('Website');
        this.clickBttn=blockForm.locator("//button[text()='Submit']");
    }

    async goto(){
        await this.page.goto('http://localhost:4200/pages/forms/layouts');
    }   
    async fillBlockForm(data){
        await this.firstName.fill(data.FirstName);
        await this.lastName.fill(data.LastName);
        await this.email.fill(data.Email);
        await this.website.fill(data.Website);
    }
    async submitBlockForm(){
        await this.clickBttn.click();
    }
     
}
module.exports={BlockForm};