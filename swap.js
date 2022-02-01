function swapWithoutThirdVar(firstNumber, secondNumber){
    console.log('Before Swap : ', firstNumber, secondNumber);
    let temp  = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
    console.log('After Swap : ', firstNumber, secondNumber);
}

function swapWithThirdVar(firstNumber, secondNumber){
    console.log('Before Swap : ', firstNumber, secondNumber);
    firstNumber = firstNumber + secondNumber;
    secondNumber = firstNumber - secondNumber;
    firstNumber = firstNumber - secondNumber;
    console.log('After Swap : ', firstNumber, secondNumber);
}


console.log("Swap using third var");
swapWithoutThirdVar(1, 2);
console.log("Swap without using third var");
swapWithThirdVar(1, 2);