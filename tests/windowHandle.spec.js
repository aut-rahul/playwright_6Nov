import{test,expect}from'@playwright/test';

test.beforeEach(async({page})=>{
  await page.goto('https://demoqa.com/browser-windows');
});

test('New Tab',async({page, context})=>{

    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button',{name:'New Tab', exact: true}).click()
    ]);
    await newTab.waitForLoadState();
    await expect(newTab.getByText('This is a sample page')).toBeVisible();
    await newTab.close();
});

test('New Window',async({page, context})=>{

    const [newWindow] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button',{name:'New Window', exact: true}).click()
    ]);
    await newWindow.waitForLoadState();
    await expect(newWindow.getByText('This is a sample page')).toBeVisible();
    await newWindow.close();
});

test('New Window Message',async({page, context})=>{

    const [newWindowMessage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button',{name:'New Window Message', exact: true}).click()
    ]);
    await newWindowMessage.waitForLoadState();
    const newWinMsg= 'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.';
    await expect(newWindowMessage.getByText(newWinMsg)).toBeVisible();
    await newWindowMessage.close();
});