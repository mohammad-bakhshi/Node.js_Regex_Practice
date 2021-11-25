const fs=require('fs');

fs.open('newFile.txt', 'w+', function (err, f) {
    if (err) {
       return console.error(err);
    }
    console.log(f);
    console.log("File opened!!");     
 });
fs.exists('./newFile.txt', (exists) => {
    console.log(exists ? 'Found' : 'Not Found!');
  });