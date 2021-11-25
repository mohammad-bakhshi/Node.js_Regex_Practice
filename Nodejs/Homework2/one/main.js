const fs = require('fs');
const { json } = require('stream/consumers');

var content='';

fs.readFile('./from.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log('err :' + err);
    }
    else {
        fs.writeFile('./to.txt', data, function (err) {
            if (err) {
                console.log('err :' + err);
            }
        })
    }
})

