import readXlsxFile from "read-excel-file/node";
import { z } from "zod";

(async function () {
  const validationSchema = z.array(
    z.object({
      index: z.number(),
      firstName: z.string(),
      lastName: z.string(),
      gender: z.enum(["Male", "Female"]),
      country: z.string(),
      age: z.number(),
      date: z.string(),
      id: z.number()
    })
  )

  const schema = {
    Index: {
      prop: "index",
      type: Number,
      required: true
    },
    "First Name": {
      prop: "firstName",
      type: String,
      required: true
    },
    "Last Name": {
      prop: "lastName",
      type: String
    },
    "Gender": {
      prop: "gender",
      type: String,
      oneOf: [
        "Female",
        "Male"
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
      type: String
    },
    "Id": {
      prop: "id",
      type: Number
    }
  };
  const sheet = await readXlsxFile("../example.xlsx", { schema });
  const data = sheet.rows;
  validationSchema.parse(data);
})();
