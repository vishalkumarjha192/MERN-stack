const fs = require('fs');

let result = fs.readFileSync('content.txt', 'utf-8');
console.log("File content:", result);
