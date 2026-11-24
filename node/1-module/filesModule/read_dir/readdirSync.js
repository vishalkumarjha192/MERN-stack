const fs = require('fs');

const dirPath = './newDir';

//  readdir directory by synchronous method
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    console.log('Files in directory:', files);
  }
});



