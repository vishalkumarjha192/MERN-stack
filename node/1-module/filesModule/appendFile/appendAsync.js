const fs = require('fs');


// fs.appendFile('./content.txt', 'This is the appended Async file content.\n', (err) => {
//   if (err) {
//     console.error('Error appending content:', err);
//   } else {
//     console.log('File content appended successfully.');
//   }
// });

fs.appendFile('./content.txt', 'This is the appended Async file content.\n', (err) => {
  if (err) {
    console.error('Error appending content:', err); 
  } else {
    console.log('File content appended successfully.');
  }
});


fs.cp('./content.txt', './content_copy.txt', (err) => {
  if (err) {
    console.error('Error copying file:', err);  
  } else {
    console.log('File copied successfully.');
  }
});
