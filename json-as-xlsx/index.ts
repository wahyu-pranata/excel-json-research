import xlsx, { IJsonSheet, ISettings } from "json-as-xlsx";

let data: IJsonSheet[] = [
  {
    sheet: "Mahasiswa",
    columns: [
      { label: "Full Name", value: "fullName" },
      { label: "NIM", value: "nim" },
      { label: "Class", value: "class" },
      { label: "Age", value: (row: {age?: string}) => row.age + " years" }, // Custom format
    ],
    content: [
      {
        fullName: "Wahyu Pranata",
        nim: "11223344",
        class: "A",
        age: 17,
      },
      {
        fullName: "Jean Gunnhildr",
        nim: "11223345",
        class: "B",
        age: 18,
      },
      {
        fullName: "Kaeya ALberich",
        nim: "11223346",
        class: "C",
        age: 18,
      },
      {
        fullName: "Kaede Hara",
        nim: "11223347",
        class: "D",
        age: 17,
      },
      {
        fullName: "Raiden",
        nim: "11223348",
        class: "A",
        age: 17,
      },
    ],
  }
]

let settings: ISettings = {
  fileName: "MySheet",
}

xlsx(data, settings);