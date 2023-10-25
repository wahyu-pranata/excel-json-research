const XLSX = require("xlsx");
const workbook = XLSX.readFile("../example.xlsx");
const sheetList = workbook.SheetNames;

sheetList.forEach((sheet) => {
  let worksheet = workbook.Sheets[sheet];

  let headers = {};
  let data = [];

  for (x in worksheet) {
    const col = x.substring(0, 1);
    const row = x.substring(1);

    // v means Value in JSON structure
    const value = worksheet[x].v;

    if (row == 1) {
      headers[col] = value;
      continue;
    }

    if (!data[row]) data[row] = {};
    data[row][headers[col]] = value;
  }
  console.log(data);
})