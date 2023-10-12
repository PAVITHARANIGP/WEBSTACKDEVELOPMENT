<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'posts', 'blogPost.txt'), 'Hello', (err) => {
  if (err) {
    throw err;
  }
  console.log('file created');
=======
const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'posts', 'blogPost.txt'), 'Hello', (err) => {
  if (err) {
    throw err;
  }
  console.log('file created');
>>>>>>> 6c7f400f4d4ecfecec093991f299411d69a654bc
});