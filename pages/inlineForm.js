/*
locator - Name, Email, Checkbox, Button (submit)
function - action on Submit
*/

    const inLineFormName =page.getByPlaceholder('Jane Doe');
    const inLineFormEmail= page.getByPlaceholder('Email').first();
    const inLineFormCheckBox= page.locator('.custom-checkbox').first();
    const inLineFormSubmit= page.locator("//button[text()='Submit']").first();