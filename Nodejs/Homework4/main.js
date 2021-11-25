const fs = require('fs');

let namesText = fs.readFileSync('./names.txt', 'utf-8', 'r');

let numbersText = fs.readFileSync('./numbers.txt', 'utf-8', 'r');

let namesArray = namesText.split('\r\n');

let numbersArray = numbersText.split('\r\n');

let names = [];

let numbers = [];

for (let index = 0; index < namesArray.length; index++) {
    names.push(namesArray[index].split('-'));
}


for (let index = 0; index < numbersArray.length; index++) {
    numbers.push(numbersArray[index].split('-'));
}

for (let index = 0; index < names.length; index++) {
    let array=[];
    for (let counter = 0; counter < numbers.length; counter++) {
        if (numbers[counter][0]===names[index][0]) {
            array.push(numbers[counter][1]);
        }
    }
    if (array.length===0) {
        console.log(names[index][1]+"hasn't any phone number.");
    }
    else if(array.length===1)
    {
        console.log(names[index][1]+"'s phone number is "+array[0]);
    }
    else{
        let temp='';
        for (let i = 0; i < array.length; i++) {
            if (i===array.length-1) {
                temp+=array[i];
            }
            else{
                temp+=array[i]+',';
            }
        }
        console.log(names[index][1]+"'s phone numbers are "+temp);
    }
}