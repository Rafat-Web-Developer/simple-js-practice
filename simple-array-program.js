function findSum(getArray){
    var sum = 0;
    for(let i = 0; i < getArray.length; i++){
        sum += getArray[i];
    }
    return sum;
}

function findMaxNumber(getArray){
    var large = getArray[0];
    for(let i = 0; i <= getArray.length-1; i++){
        if(large < getArray[i]){
            large = getArray[i];
        }
    }
    return large;
}

function findMinNumber(getArray){
    var min = getArray[0];
    for(let i = 0; i <= getArray.length-1; i++){
        if(min > getArray[i]){
            min = getArray[i];
        }
    }
    return min;
}

let array = [5, 6, 1, 8];
let getSum = findSum(array);
let getMax = findMaxNumber(array);
let getMin = findMinNumber(array);
console.log("Sum = ", getSum);
console.log("Max = ", getMax);
console.log("Min = ", getMin);