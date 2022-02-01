function reverseString(text){
    let newText = "";
    for(const char of text){
        newText = char + newText;
    }
    return newText;
}

let intro = "Welcome to my simple program";
let getResult = reverseString(intro);
console.log("Original Text : ", intro);
console.log("Reverse Text : ",getResult);