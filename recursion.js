// -----All Functions Are Start From Here-----

// --Simple print number function program using recursion--
function printNumber(getStartingNumber, getEndingNumber){
    var start = getStartingNumber;
    const end = getEndingNumber;
    if(start > end){
        return;
    }
    console.log(start);
    printNumber(start + 1, end);
}

// --Simple sum function program using recursion--
function sum(getStartingNumber, getEndingNumber){
    if(getStartingNumber > getEndingNumber){
        return 1;
    }
    console.log(getStartingNumber);
    return getStartingNumber + sum(getStartingNumber + 1, getEndingNumber);
}

// -----All Functions Are End Here-----

const startingNumber = 1;
const endingNumber = 5;
console.log("-----Print Number Program-----");
printNumber(startingNumber, endingNumber);
console.log("-----Sum Program-----");
sum(startingNumber, endingNumber);

