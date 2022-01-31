function convertTemperature(value, fromType, toType){
    let c = 0;
    let f = 0;
    let k = 0;
    switch(fromType){
        case 'c':
            if(toType=='f'){
                f = (((value*9)/5)+32);
                return f;
            }else{
                k = (value+273);
                return k;
            }
            break;
        case 'f':
            if(toType=='c'){
                c = (((value-32)*5)/9);
                return c;
            }else{
                k = (((value-32)*(5/9))+273);
                return k;
            }
            break;
        case 'k':
            if(toType='f'){
                f = ((((value-273)*9)/5)-32);
                return f;
            }else{
                c = (value-273);
                return c;
            }
            break;
        default:
            return 0;
    }
}

let checkValue = 5;
let getResult =  convertTemperature(checkValue, 'f', 'c');
console.log(getResult);