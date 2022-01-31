function findFactorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact *= i;
    }
    return fact;
}
let number = 3;
let getResult = findFactorial(number);
console.log(getResult);