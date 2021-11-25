const fs = require('fs');

const first = fs.readFileSync('./from.txt', 'utf-8');

const second = fs.readFileSync('./append.txt', 'utf-8');

fs.writeFileSync('./to.txt',first);

fs.appendFileSync('./to.txt',second);