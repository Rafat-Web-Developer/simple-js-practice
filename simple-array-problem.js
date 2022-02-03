
function findNegativeValue(getArray){
    let newArray = [];
    let position = 0;
    let allInfo = {
        array: newArray,
        position: position
    };
    for (let element of getArray) {
        if(element == -1){
            break;
        }else{
            newArray.push(element);
        }
        position++;
    }
    allInfo['position'] = position;
    return allInfo;
}

const array = [5, 2, 12, 54, -1, 36, 14];
let getResult = findNegativeValue(array);
console.log("Original Array : ", array);
console.log("-1 is found in positon ",getResult.position,".");
console.log("New Array : ", getResult.array);