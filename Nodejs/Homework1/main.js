function myDisplayer(result) {
    console.log(result);
}


function sum(firstName,lastName,myCallback) {
    let result=firstName+lastName;
    myCallback(result);
}


sum('Mohammad','Bakhshi',myDisplayer);