// array chaining method

const products = [

    {name:'gold star', price : 30},

    {name:'green shell', price : 10},

    {name:'red star', price : 40},

];

// normal way

// const filtered = products.filter(function(product){

//    return product.price > 20;

// });

// const promos = filtered.map(function(product){

//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

// console.log(promos);

// chaning way

const filtered = products.filter(function(product){return product.price > 20;}).map(function(product){return `the ${product.name} is ${product.price / 2}pounds`});

console.log(filtered);