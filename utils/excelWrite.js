const XLSX=require('xlsx');
const fs= require('fs');
const path=require('path');

function writeExcel(data, filePath){

    const dir= path.dirname(filePath);
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir,{recursive:true});
    }

    const workbook=XLSX.utils.book_new();
    const worksheet=XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, filePath);
}

module.exports={writeExcel};