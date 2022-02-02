function countAnimal(distence){
    const firstTenDistenceAnimals = 10;
    const secondTenDistenceAnimals = 50;
    const restDistenceAnimals = 100;
    if(distence <= 10){
        const total = distence * firstTenDistenceAnimals;
        return total;
    }
    else if(distence <= 20){
        const firstTotal =  10 * firstTenDistenceAnimals;
        const secondTotal = (distence-10) * secondTenDistenceAnimals;
        const total = firstTotal + secondTotal;
        return total;
    }
    else{
        const firstTotal =  10 * firstTenDistenceAnimals;
        const secondTotal = 10 * secondTenDistenceAnimals;
        const thirdTotal = (distence-20) * restDistenceAnimals; 
        const total = firstTotal + secondTotal + thirdTotal;
        return total;
    }
}

let myDistence = 30;
const totalAnimal = countAnimal(myDistence);
console.log(totalAnimal);