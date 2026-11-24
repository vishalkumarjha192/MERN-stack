const fs = require('fs');

let dir = './newDir';

fs.mkdir(dir, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log('Directory created successfully!');
  }
});