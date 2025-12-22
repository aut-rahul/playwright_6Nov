import{test, expect}from'@playwright/test';

test.skip('inlineForm',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');

    await page.getByPlaceholder('Jane Doe').fill('John Smith');
    await page.getByPlaceholder('Email').first().fill('email@email.com');
    await page.locator('.custom-checkbox').first().click();
    await page.locator("//button[text()='Submit']").first().click();

});

test('usingGrid',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');

    await page.locator('#inputEmail1').fill('JohnSmith@email.com');
    await page.locator('#inputPassword2').fill('Password123');
    await page.locator("//span[text()='Option 1']").click();
    await page.locator("//span[text()='Option 1']").click();
    await page.locator("//button[text()='Sign in']").nth(0).click();

});

test('basicForm',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');

    await page.locator('#exampleInputEmail1').fill('JohnSmith@email.com');
    await page.locator('#exampleInputPassword1').fill('Password123');
    await page.locator("//span[text()='Check me out']").click();
    //await page.locator('button[status="danger"]').click();
    //await page.locator('.status-danger').click();
    await page.locator("//button[@status='danger' and text()='Submit']").click();


});

test('formWithoutLabel',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');

    await page.getByPlaceholder('Recipients').fill('JohnSmith');
    await page.getByPlaceholder('Subject').fill('Playwright with JavaScript');
    await page.getByPlaceholder('Message').fill("This is message for testing form without label");
    await page.locator('.status-success').click();
    //await page.locator('button.status-success').click();
    
});

test('blockForm',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');

    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Smith');
    await page.getByPlaceholder('Email').nth(3).fill("john@email.com");
    await page.locator('#inputWebsite').fill("https://www.example.com");
    const blokForm=page.locator('nb-card', { hasText: 'Block form' });
    await blokForm.getByRole('button', { name: 'Submit' }).click();
    
});

test.only('Horizontal form',async({page})=>{

    await page.goto('http://localhost:4200/pages/forms/layouts');
    const Horizontalform=page.locator('nb-card', { hasText: 'Horizontal form' });
    await Horizontalform.getByPlaceholder('Email').fill("john@email.com");
    await Horizontalform.getByPlaceholder('Password').fill("Password123");
    await Horizontalform.locator("//span[text()='Remember me']").click();
    await Horizontalform.locator("//button[text()='Sign in']").click();
    
});