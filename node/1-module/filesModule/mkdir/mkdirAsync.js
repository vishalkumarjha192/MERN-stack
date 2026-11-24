const js = require('fs');

let dir = './newDirAsync';

js.mkdirSync(dir);
console.log('Directory created successfully!');