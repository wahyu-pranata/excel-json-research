const readXlsxFile = require("read-excel-file/node");

const schema = {
  "Index": {
    prop: "index",
    type: Number
  },
  "First Name": {
    prop: "firstName",
    type: String
  },
  "Last Name": {
    prop: "lastName",
    type: String
  },
  "Gender": {
    prop: "gender",
    type: String,
    oneOf: [
      "FEMALE",
      "MALE"
    ]
  },
  "Country": {
    prop: "country",
    type: String
  },
  "Age": {
    prop: "age",
    type: Number
  },
  "Date": {
    prop: "date",
    type: Date
  },
  "Id": {
    prop: "id",
    type: Number
  }
}

readXlsxFile("../example.xlsx", { schema }).then(({ rows, errors }) => {
  console.log(rows)
});