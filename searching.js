let products = [
    {name: 'Huawei Mobile Phone', price: 24000},
    {name: 'Sumsang Mobile Phone', price: 7000},
    {name: 'Iphone Mobile Phone', price: 90000},
    {name: 'Huawei watch', price: 5000},
    {name: 'Samsung watch', price: 3000},
    {name: 'Iphone watch', price: 20000}
];

function search(getProducts, searchText){
    let totalPriceOfSearchingProducts = 0;
    let getSearchingProducts = [
        {totalPrice: totalPriceOfSearchingProducts}
    ];
    for (const product of getProducts) {
        if(product.name.includes(searchText)){
            getSearchingProducts.push(product);
            totalPriceOfSearchingProducts += product.price;
        }
    }
    getSearchingProducts[0].totalPrice = totalPriceOfSearchingProducts;
    return getSearchingProducts;
}

const getResult = search(products, 'watch');
for (let i = 1; i < getResult.length; i++) {
    console.log(getResult[i]);
}
console.log("If you went to buy this all products you need to pay : ",getResult[0].totalPrice);