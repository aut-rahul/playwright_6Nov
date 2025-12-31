/*
locator - Email, Password, Radio Button, Button (Sign In)
function - action on Sign In
*/ 
class UsingGrid{
    constructor(page){
        this.page=page;
    const usingGrid=page.locator('nb-card', { hasText: 'Using the Grid' });
    this.email= usingGrid.locator('#inputEmail1');
    this.password= usingGrid.locator('#inputPassword2');
    this.rdBttn1= usingGrid.locator("//span[text()='Option 1']");
    this.rdBttn2= usingGrid.locator("//span[text()='Option 2']");
    this.signInbttn= usingGrid.locator("//button[text()='Sign in']");

    }

    async goto(){
        await this.page.goto('http://localhost:4200/pages/forms/layouts');
    }

    async fillUsingGrid(data){
        await this.email.fill(data.Email);
        await this.password.fill(data.Password);
    }

    async radioButtonClick(){
        await this.rdBttn1.click();
        await this.rdBttn2.click();
    }

    async submitUsingGrid(){
        await this.signInbttn.click();
    }
}

module.exports={UsingGrid};