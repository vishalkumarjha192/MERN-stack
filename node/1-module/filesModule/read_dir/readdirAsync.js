const fs = require('fs');

const dirPath = './newDirAsync';

console.log('Files in directory:', fs.readdirSync(dirPath));