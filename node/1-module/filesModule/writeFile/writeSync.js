// synchronously write data to a file

const fs = require("fs");

let data = "This is a test file created using Node.js fs module.";

fs.writeFileSync("writeSync.txt", data, "utf-8");