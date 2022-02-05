// --Simple print number program using recursion--
function printNumber(getStartingNumber, getEndingNumber){
    var start = getStartingNumber;
    const end = getEndingNumber;
    if(start > end){
        return;
    }
    console.log(start);
    printNumber(start + 1, end);
}

const startingNumber = 1;
const endingNumber = 10;
printNumber(startingNumber, endingNumber);

