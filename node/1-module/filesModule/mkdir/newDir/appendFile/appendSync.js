const fs= require('fs');

fs.appendFileSync('./content.txt', 'This is the appended Sync file content.\n');
console.log('File content appended successfully.');

fs.cpSync('./content.txt', './content_copy.txt');
console.log('File copied successfully.');