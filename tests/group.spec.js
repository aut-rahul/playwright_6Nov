const { test, expect } = require('@playwright/test');
const { InlineForm } = require('../pages/inlineForm');
const { UsingGrid } = require('../pages/usingGrid');
const { BasicForm } = require('../pages/basicForm');
const { FormWithoutLabel } = require('../pages/formWithoutLabel');
const { BlockForm } = require('../pages/blockForm');
const { HorizontalForm } = require('../pages/horizontalForm');
const ExcelReader = require('../utils/excelReader');

let testData;

/* ================= BEFORE ALL ================= */
test.beforeAll(async () => {
  // Read Excel only once
  testData = ExcelReader.readExcel('./test-data/formData.xlsx', 'Sheet1');
});

/* ================= BEFORE EACH ================= */
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/pages/forms/layouts');
});

/* ================= AFTER EACH ================= */
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const testName = testInfo.title.replace(/\s+/g, '_');
    await page.screenshot({
      path: `screenshots/${testName}.png`,
      fullPage: true
    });
  }
});

/* ================= AFTER ALL ================= */
test.afterAll(async () => {
  console.log('All form tests execution completed');
});

/* =================================================
   SANITY BUCKET (Critical Smoke Coverage)
   ================================================= */
test.describe('Sanity Suite - Forms', () => {

  test('Inline Form - Sanity @sanity', async ({ page }) => {
    const inlineForm = new InlineForm(page);
    await inlineForm.fillInlineForm(testData[0]);
    await inlineForm.checkBoxClick();
    await inlineForm.submitInlineForm();
  });

  test('Basic Form - Sanity @sanity', async ({ page }) => {
    const basicForm = new BasicForm(page);
    await basicForm.fillBasicForm(testData[2]);
    await basicForm.checkBoxClick();
    await basicForm.submitBasicForm();
  });

});

/* =================================================
   REGRESSION BUCKET (Full Coverage)
   ================================================= */
test.describe('Regression Suite - Forms', () => {

  test('Inline Form with POM @regression', async ({ page }) => {
    const inlineForm = new InlineForm(page);
    await inlineForm.fillInlineForm(testData[0]);
    await inlineForm.checkBoxClick();
    await inlineForm.submitInlineForm();
  });

  test('Using Grid Form with POM @regression', async ({ page }) => {
    const usingGrid = new UsingGrid(page);
    await usingGrid.fillUsingGrid(testData[1]);
    await usingGrid.radioButtonClick();
    await usingGrid.submitUsingGrid();
  });

  test('Basic Form with POM @regression', async ({ page }) => {
    const basicForm = new BasicForm(page);
    await basicForm.fillBasicForm(testData[2]);
    await basicForm.checkBoxClick();
    await basicForm.submitBasicForm();
  });

  test('Form Without Labels with POM @regression', async ({ page }) => {
    const formWithoutLabels = new FormWithoutLabel(page);
    await formWithoutLabels.fillFormWithoutLabel(testData[3]);
    await formWithoutLabels.submitFormWithoutLabel();
  });

  test('Block Form with POM @regression', async ({ page }) => {
    const blockForm = new BlockForm(page);
    await blockForm.fillBlockForm(testData[4]);
    await blockForm.submitBlockForm();
  });

  test('Horizontal Form with POM @regression', async ({ page }) => {
    const horizontalForm = new HorizontalForm(page);
    await horizontalForm.fillHorizontalForm(testData[5]);
    await horizontalForm.checkBoxClick();
    await horizontalForm.submitHorizontalForm();
  });

});
