const cart = [
    {
        product_name: "Shirt",
        price: 200,
        quantity: 2
    },
    {
        product_name: "Bag",
        price: 1000,
        quantity: 3
    },
    {
        product_name: "Watch",
        price: 1050,
        quantity: 1
    }
];

function totalCost(products){
    let sum = 0;
    for(const product of products){
        sum += product.price*product.quantity;
    }
    return sum;
}

const totalAmmount = totalCost(cart);
console.log(totalAmmount);