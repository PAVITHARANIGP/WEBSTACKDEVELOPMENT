<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

fs.readFile(
  path.join(__dirname, 'posts', 'blogPost.txt'),
  'utf-8',
  (err, data) => {
    if (err) {
      console.log('file read error');
    }
    console.log(data); //returns a buffer
    const content = Buffer.from(data);

    // console.log(content.toString());
    console.log(data);
  }
=======
const fs = require('fs');
const path = require('path');

fs.readFile(
  path.join(__dirname, 'posts', 'blogPost.txt'),
  'utf-8',
  (err, data) => {
    if (err) {
      console.log('file read error');
    }
    console.log(data); //returns a buffer
    const content = Buffer.from(data);

    // console.log(content.toString());
    console.log(data);
  }
>>>>>>> 6c7f400f4d4ecfecec093991f299411d69a654bc
);