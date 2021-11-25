const fs=require('fs');

var res = fs.openSync('newFile.txt', 'w');

var result=fs.existsSync('./newFile.txt');

console.log(result);