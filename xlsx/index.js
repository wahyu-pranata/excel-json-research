const XLSX = require("xlsx");
const workbook = XLSX.readFile("../example.xlsx");
const sheetList = workbook.SheetNames;

sheetList.forEach((sheet) => {
  let worksheet = workbook.Sheets[sheet];

  let headers = {};
  let data = [];

  for (cell in worksheet) {
    const col = cell.substring(0, 1);
    const row = cell.substring(1);

    // v means Value in JSON structure
    const value = worksheet[cell].v;

    if (row == 1) {
      headers[col] = value;
      continue;
    }

    if (!data[row]) data[row] = {};
    data[row][headers[col]] = value;
  }
  console.log(data);
})