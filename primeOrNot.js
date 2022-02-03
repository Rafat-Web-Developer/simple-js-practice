
function primeOrNot(getCheckValue){
    var count = 0;
    for(let i = 1; i <= getCheckValue; i++){
        if(getCheckValue % i == 0){
            count++;
        }
    }
    if(count == 2){
        return true;
    }else{
        return false;
    }
}

const checkValue = 13;
var getResult = primeOrNot(checkValue);
if(getResult == true){
    console.log(checkValue," is a prime number.");
}else{
    console.log(checkValue," is not a prime number.");
}