let ninja=['array','is','here',50,80];
console.log(ninja[3]);
ninja[3]=20;
console.log(ninja[3]);
console.log(ninja);


//Arrays property and methods-------------------->

//console.log(ninja.length);



// let result=ninja.concat(['me',01]);

// console.log(result.length);
// console.log(result);
// console.log(result.join('-'));
// console.log(result.indexOf(20));


//console.log(ninja.length);
//console.log(ninja);
//console.log(ninja.join(','));
//console.log(result.indexOf(01));


//push and pop

let know=ninja.push('zia'); // push is destructive method.because it's change the main variable.

console.log(know);
console.log(ninja);

know=ninja.pop(); //it's pop the value from the variable.
console.log(know);
console.log(ninja);