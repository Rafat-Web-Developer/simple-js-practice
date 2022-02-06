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
function sumForword(getStartingNumber, getEndingNumber){
    if(getStartingNumber > getEndingNumber){
        return 0;
    }
    return getStartingNumber + sumForword(getStartingNumber + 1, getEndingNumber);
}

// --Simple sum function program using recursion--
function sumReverse(getEndingNumber, getStartingNumber){
    if(getStartingNumber > getEndingNumber){
        return 0;
    }
    return getEndingNumber + sumReverse(--getEndingNumber, getStartingNumber);
}

// -----All Functions Are End Here-----

const startingNumber = 1;
const endingNumber = 5;
console.log("-----Print Number Program-----");
printNumber(startingNumber, endingNumber);
console.log("-----Sum Program (Forword)-----");
console.log(sumForword(startingNumber, endingNumber));
console.log("-----Sum Program (Reverse)-----");
console.log(sumReverse(endingNumber, startingNumber));

// -----Details overview of recursion-----
// 5 + sumReverse(4, 1)
// 5 + 4 + sumReverse(3, 1)
// 5 + 4 + 3 + sumReverse(2, 1)
// 5 + 4 + 3 + 2 + sumReverse(1, 1)
// 5 + 4 + 3 + 2 + 1 + sumReverse(0, 1)
// 5 + 4 + 3 + 2 + 1 + 0 = 15
