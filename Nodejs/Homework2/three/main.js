const fs = require('fs');

let first = '';

let second = '';

fs.readFile('./from.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log('err: ' + err);
    }
    else {
        fs.writeFile('./to.txt', data, function (err) {
            if (err) {
                console.log(err);
            }
        })
    }
})

fs.readFile('./append.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log('err: ' + err);
    }
    else {
        fs.appendFile('./to.txt', data, function (err) {
            if (err) {
                console.log(err);
            }
        })
    }
})





