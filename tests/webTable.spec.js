import { test, expect } from '@playwright/test';
import { table } from 'console';
const{writeExcel}=require('../utils/excelWrite');

test.describe.serial('Web Table Operations', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/webtables');
    });

    test.afterEach(async ({ page }, testInfo) => {
        const testName = testInfo.title.replace(/\s+/g, '_');
        await page.screenshot({
            path: `screenshots/${testName}.png`,
            //fullPage: true
        });
    });

    test('add records', async ({ page }) => {
        // Add a new record

        await page.locator('#addNewRecordButton').click();

        await page.locator('#firstName').fill('Rahul');
        await page.locator('#lastName').fill('Dravid');
        await page.locator('#userEmail').fill('rahul@email.com');
        await page.locator('#age').fill('35');
        await page.locator('#salary').fill('50000');
        await page.locator('#department').fill('Cricket');
        await page.locator('#submit').click();

        await expect(page.locator('.rt-tbody')).toContainText('Rahul');

    });

    test('search record', async ({ page }) => {

        /* -----------------search record ---------------- */
        await page.locator('#searchBox').fill('Cierra');
        await expect(page.locator('.rt-tbody')).toContainText('Cierra');

    });

    test('edit record', async ({ page }) => {

        /* -----------------edit record ---------------- */
        await page.locator('#searchBox').fill('Cierra');
        await page.locator('#edit-record-1').click();
        await page.locator('#department').fill('Automation Testing');
        await page.locator('#submit').click();
        await expect(page.locator('.rt-tbody')).toContainText('Automation Testing');


    });

    test('delete record', async ({ page }) => {

        /* -----------------delete record ---------------- */
        await page.locator('#searchBox').fill('Cierra');
        await page.locator('#delete-record-1').click();
        await page.locator('#searchBox').clear();
        await expect(page.locator('.rt-tbody')).not.toContainText('Cierra');


    });

    /* Export data in excel */

    test.only('export data to excel', async ({ page }) => {

        const rows=await page.locator('.rt-tbody .rt-tr-group');
        const rowCount= await rows.count();
        const tableData=[];
        for(let i=0;i<rowCount;i++){
            const cellls= await rows.nth(i).locator('.rt-td').allTextContents();

            if(!cellls[0]) continue; //skip empty rows
            tableData.push({
                FirstName:cellls[0],
                LastName:cellls[1],
                Age:cellls[2],
                Email:cellls[3],
                Salary:cellls[4],
                Department:cellls[5]
            });

    
    }
    const filePath='./output/webTableData.xlsx';
    writeExcel(tableData,filePath);
    console.log('Data exported to excel',filePath);
});
});