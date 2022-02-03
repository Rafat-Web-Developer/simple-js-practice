function sumAllDigit(getNumber){
    var sum = 0;
    while(getNumber > 0){
        rem = getNumber % 10;
        sum += rem;
        getNumber = Math.floor(getNumber / 10);
    }
    return sum;
}

var number = 12345;
let getResult = sumAllDigit(number);
console.log("Original Number : ", number);
console.log("Sum of all digit of that number is : ",getResult);