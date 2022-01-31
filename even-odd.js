function evenOrOdd(number){
    if( number%2 == 0){
        return true;
    }else{
        return false;
    }
}

let checkNumber = 10;
let getResult = evenOrOdd(checkNumber);
if(getResult == true){
    console.log("Even Number");
}else{
    console.log("Odd Number");
}