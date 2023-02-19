//array map method (not destructive)

const prices = [20,30,4,8,45,43];

const salePrices = prices.map(function(price){

    return price/2;
});

// console.log(salePrices);

// another example

const products = [
    {name:'sobji', price:30},
    {name:'dim', price:50},
    {name:'tomato', price:40},
    {name:'kacha morich', price:25},
    {name:'chal', price:75},
];

const saleProducts = products.map(function(product){

    if(product.price> 30){

    // product.price = product.price / 2; //it will change orginal array because it is an object not normal array....
    
    // return product;

    return {name:product.name , price : product.price / 2}; // it will not change orginal object...

    }
    else{

        return product;
    }
});

console.log(saleProducts);

console.log(products);