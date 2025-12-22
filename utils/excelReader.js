const xlsx = require("xlsx");
const path = require("path");

class ExcelReader {

    static readExcel(filePath, sheetName) {
        const absolutePath = path.resolve(filePath);     // ensures correct file path
        const workbook = xlsx.readFile(absolutePath);
        const sheet = workbook.Sheets[sheetName];

        if (!sheet) {
            throw new Error(` Sheet "${sheetName}" not found in Excel`);
        }

        const jsonData = xlsx.utils.sheet_to_json(sheet);

        if (!jsonData.length) {
            throw new Error(" Excel is empty OR header not recognized");
        }

        return jsonData;
    }
}

module.exports = ExcelReader;
