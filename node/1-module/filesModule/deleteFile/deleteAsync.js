const fs = require('fs');

fs.unlink('content.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully.');
  }
});
