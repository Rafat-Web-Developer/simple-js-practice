
function reverseNumber(getNumber){
    let revNumber = 0;
    let rem = 0;
    while(getNumber > 0){
        rem = getNumber % 10;
        revNumber = revNumber * 10 + rem;
        getNumber = Math.floor(getNumber / 10);
    }
    return revNumber;
}

var number = 432;
const getResult = reverseNumber(number);
console.log(getResult);