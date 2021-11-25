function calculator(firsNumber, secondNumber, operation) {
    let answer = 0;
    switch (operation) {
        case '+':
            answer = firsNumber + secondNumber;
            break;
        case '-':
            answer = firsNumber - secondNumber;
            break;
        case '*':
            answer = firsNumber * secondNumber;
            break;
        case '/':
            answer = firsNumber / secondNumber;
            break;
    }

    return answer;
}

module.exports=calculator;