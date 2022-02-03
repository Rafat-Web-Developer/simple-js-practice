function armstrongOrNot(getNumber){
    var sum = 0;
    var rem = 0;
    var check = getNumber;
    while(getNumber > 0){
        rem = getNumber % 10;
        sum += Math.pow(rem, 3);
        getNumber = Math.trunc(getNumber / 10);
    }
    if(sum == check){
        return true;
    }else{
        return false;
    }
}

const number = 371;
const getResult = armstrongOrNot(number);
if(getResult == true){
    console.log(number," is a armstrong number");
}else{
    console.log(number," is not a armstrong number");
}