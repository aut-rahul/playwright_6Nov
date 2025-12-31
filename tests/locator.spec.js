import{test, expect}from'@playwright/test';

test('inlineForm',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');
    const inlineform=page.locator('nb-card', { hasText: 'Inline form' });
    await inlineform.getByPlaceholder('Jane Doe').fill('John Smith');
    await inlineform.getByPlaceholder('Email').fill('email@email.com');
    await inlineform.locator('.custom-checkbox').click();
    await inlineform.locator("//button[text()='Submit']").click();

});

test('usingGrid',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');
    const usingGrid=page.locator('nb-card', { hasText: 'Using the Grid' });
    const enteredEmail='JohnSmith@email.com';
    await usingGrid.locator('#inputEmail1').fill(enteredEmail);
    const email= usingGrid.locator('#inputEmail1').inputValue();
    expect(email).toBe(enteredEmail);
    await usingGrid.locator('#inputPassword2').fill('Password123');
    await usingGrid.locator("//span[text()='Option 1']").click();
    await usingGrid.locator("//span[text()='Option 2']").click();
    await usingGrid.locator("//button[text()='Sign in']").click();

});

test('basicForm',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');
    const basicForm=page.locator('nb-card', { hasText: 'Basic form' });
    await basicForm.locator('#exampleInputEmail1').fill('JohnSmith@email.com');
    await basicForm.locator('#exampleInputPassword1').fill('Password123');
    await basicForm.locator("//span[text()='Check me out']").click();
    //await page.locator('button[status="danger"]').click();
    //await page.locator('.status-danger').click();
    await page.locator("//button[@status='danger' and text()='Submit']").click();


});

test('formWithoutLabel',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');
    const formWithoutLabel=page.locator('nb-card', { hasText: 'Form without labels' });
    await formWithoutLabel.getByPlaceholder('Recipients').fill('JohnSmith');
    await formWithoutLabel.getByPlaceholder('Subject').fill('Playwright with JavaScript');
    await formWithoutLabel.getByPlaceholder('Message').fill("This is message for testing form without label");
    await formWithoutLabel.locator('.status-success').click();
    //await page.locator('button.status-success').click();
    
});

test('blockForm',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');
    const blockForm=page.locator('nb-card', { hasText: 'Block form' });
    await blockForm.getByPlaceholder('First Name').fill('John');
    await blockForm.getByPlaceholder('Last Name').fill('Smith');
    await blockForm.getByPlaceholder('Email').fill("john@email.com");
    await blockForm.locator('#inputWebsite').fill("https://www.example.com");
    await blockForm.getByRole('button', { name: 'Submit' }).click();
    
});

test('Horizontal form',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');
    const Horizontalform=page.locator('nb-card', { hasText: 'Horizontal form' });
    await Horizontalform.getByPlaceholder('Email').fill("john@email.com");
    await Horizontalform.getByPlaceholder('Password').fill("Password123");
    await Horizontalform.locator("//span[text()='Remember me']").click();
    await Horizontalform.locator("//button[text()='Sign in']").click();
    
});