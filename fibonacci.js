function fibonacci(loopSize){
    var fibo = [0, 1];
    for(let i = 2; i <= loopSize; i++ ){
        fibo[i] = fibo[i-1]+fibo[i-2]
    }
    return fibo;
}

let find = 10;
let getResult = fibonacci(find);
console.log("Fibonacci Number : ");
for(let n = 0; n <= getResult.length-1; n++){
    console.log("[", n, "]"," no Element = ", getResult[n]);
}