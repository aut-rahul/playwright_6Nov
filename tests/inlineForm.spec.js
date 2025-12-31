const{test, expect}=require('@playwright/test');
const{InlineForm}=require('../pages/inlineForm');
const{UsingGrid}=require('../pages/usingGrid');
const{BasicForm}=require('../pages/basicForm');
const{FormWithoutLabel}=require('../pages/formWithoutLabel');
const{BlockForm}=require('../pages/blockForm');
const{HorizontalForm}=require('../pages/horizontalForm');
const ExcelReader=require('../utils/excelReader');


test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/pages/forms/layouts');
});

test.afterEach(async ({ page }, testInfo) => {
  const testName = testInfo.title.replace(/\s+/g, '_');
  await page.screenshot({
    path: `screenshots/${testName}.png`,
    fullPage: true
  });
});


test('inline form with POM',async({page})=>{

    const inlineForm=new InlineForm(page);
    const allData=ExcelReader.readExcel('./test-data/formData.xlsx', 'Sheet1');
    const data=allData[0];
    //await inlineForm.goto();
    await inlineForm.fillInlineForm(data);
    await inlineForm.checkBoxClick();
    await inlineForm.submitInlineForm();


});

test('UsingGrid with POM',async({page})=>{

    const usingGrid=new UsingGrid(page);
    const allData=ExcelReader.readExcel('./test-data/formData.xlsx', 'Sheet1');
    const data=allData[1];
    //await usingGrid.goto();
    await usingGrid.fillUsingGrid(data);
    await usingGrid.radioButtonClick();
    await usingGrid.submitUsingGrid();


});
test('Basic form with POM',async({page})=>{

    const basicForm=new BasicForm(page);
    const allData=ExcelReader.readExcel('./test-data/formData.xlsx', 'Sheet1');
    const data=allData[2];
    //await basicForm.goto();
    await basicForm.fillBasicForm(data);
    await basicForm.checkBoxClick();
    await basicForm.submitBasicForm();

});

test('Form without labels with POM',async({page})=>{

    const formWithoutLabels=new FormWithoutLabel(page);
    const allData=ExcelReader.readExcel('./test-data/formData.xlsx', 'Sheet1');
    const data=allData[3];
    //await formWithoutLabels.goto();
    await formWithoutLabels.fillFormWithoutLabel(data);
    await formWithoutLabels.submitFormWithoutLabel();
});

test('Block form with POM',async({page})=>{ 

    const blockForm=new BlockForm(page);
    const allData=ExcelReader.readExcel('./test-data/formData.xlsx', 'Sheet1');
    const data=allData[4];
    //await blockForm.goto();
    await blockForm.fillBlockForm(data);
    await blockForm.submitBlockForm();
});
test('Horizontal form with POM',async({page})=>{

    const horizontalForm=new HorizontalForm(page);  
    const allData=ExcelReader.readExcel('./test-data/formData.xlsx', 'Sheet1');
    const data=allData[5];
    //await horizontalForm.goto();
    await horizontalForm.fillHorizontalForm(data);
    await horizontalForm.checkBoxClick();
    await horizontalForm.submitHorizontalForm();
});