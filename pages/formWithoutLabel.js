/*
locator - Textbox1, Textbox2, Textbox3, Button (Send)
function - action on Send
*/

class FormWithoutLabel{
    constructor(page){
        this.page=page;
    
        
    const formWithoutLabel=page.locator('nb-card', { hasText: 'Form without labels' });
    this.recipient=formWithoutLabel.getByPlaceholder('Recipients');
    this.sub=formWithoutLabel.getByPlaceholder('Subject');
    this.msg=formWithoutLabel.getByPlaceholder('Message');
    this.clickBttn=formWithoutLabel.locator('.status-success');
    //await page.locator('button.status-success').click();
    }

    async goto(){
        await this.page.goto('http://localhost:4200/pages/forms/layouts');
    }   

    async fillFormWithoutLabel(data){
        await this.recipient.fill(data.Recipients);
        await this.sub.fill(data.Subject);
        await this.msg.fill(data.Message);
    }

    async submitFormWithoutLabel(){
        await this.clickBttn.click();
    }

}
module.exports={FormWithoutLabel};