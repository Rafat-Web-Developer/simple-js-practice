function palindromeOrNot(getNumber){
    var testNumber = getNumber;
    var sum = 0;
    while(testNumber > 0){
        rem = testNumber % 10;
        sum = ((sum * 10) + rem);
        testNumber = Math.floor(testNumber / 10);
    }
    if(sum == getNumber){
        return true;
    }else{
        return false;
    }
}


const number = 142;
const getResult = palindromeOrNot(number);
if(getResult == true){
    console.log(number, " is a palindrome number");
}else{
    console.log(number," is not a palindrome number");
}