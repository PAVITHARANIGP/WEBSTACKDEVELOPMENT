<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// create a directory
fs.mkdir(path.join(__dirname, '/posts'), (err) => {
  if (err) {
    console.log(err);
    console.log('folder with that name already exists');
    return;
  }
  console.log('posts folder created');
=======
const fs = require('fs');
const path = require('path');

// create a directory
fs.mkdir(path.join(__dirname, '/posts'), (err) => {
  if (err) {
    console.log(err);
    console.log('folder with that name already exists');
    return;
  }
  console.log('posts folder created');
>>>>>>> 6c7f400f4d4ecfecec093991f299411d69a654bc
});