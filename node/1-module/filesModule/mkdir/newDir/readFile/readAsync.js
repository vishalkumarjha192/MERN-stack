const fs = require('fs');

fs.readFile('content.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
