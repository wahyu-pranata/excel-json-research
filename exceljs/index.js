const Excel = require("exceljs");
const workbook = new Excel.Workbook();

/**
 * @param {string} path 
 */
async function toJson(path) {
  const jsonData = [];
  await workbook.xlsx.readFile(path).then((value) => {
    const sheet = value.getWorksheet("Sheet1");
    const firstRow = sheet.getRow(1);

    let keys = firstRow.values;
    keys.shift();

    sheet.eachRow((row, rowNumber) => {
      if (rowNumber != 1) {
        let values = row.values;
        values.shift();

        let data = {};
        for (let i = 0; i < keys.length; i++) {
          data[keys[i]] = values[i];
          console.log(data);
          jsonData.push(data);
        }
      }
    });
  });
  return jsonData;
}