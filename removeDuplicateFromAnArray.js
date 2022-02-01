function removeDuplicateElement(getArray){
    const newArray = [];
    for(let element of getArray){
        if(newArray.indexOf(element) == -1){
            newArray.push(element);
        }
    }
    return newArray;
}

const array = [4, 7, 5, 4, 8, 7, 9, 5, 8, 9];
let getResult = removeDuplicateElement(array);
console.log(getResult);