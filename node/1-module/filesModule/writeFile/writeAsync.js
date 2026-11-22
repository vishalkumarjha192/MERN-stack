// Asynchronously write data to a file

const fs = require("fs");

let data = "This is a test file created using Node.js fs module.";

fs.writeFile("writeAsync", data, "utf-8", (err) => {
  if (err) {
    console.error("Error writing file:", err);  
  } else {
    console.log("File written successfully!");
  }
});

// const creatFile = (fileName, content) => {
//   fs.writeFile(fileName, content, "utf-8", (err) => {
//     if (err) {
//       console.error("Error writing file:", err);
//     } else {
//       console.log("File written successfully!");
//     }
//   });
// };

// console.log("Creating file...");
// creatFile("hello.txt", data);