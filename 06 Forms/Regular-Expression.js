// Regular Expression ------------------------------>

// test --------------------->

// (i) ---------------

// const username = 'khan';

// const pattern = /[a-z]{6,}/;

// let result = pattern.test(username);

// if(result){
//     console.log('you passed :)');
// }

// else{
//     console.log('you did not pass :(');
// }

// (ii) -------------

// const username = 'khanzi7';

// const pattern = /^[a-z]{6,}$/ig;

// let result = pattern.test(username);

// // console.log(result);

// if(result){
//     console.log('you passed :)');
// }

// else{
//     console.log('you did not pass :(');
// }

// search------------------------->

const username = '8172khanziww7';

const pattern = /[a-z]{6,}/ig;

let result = username.search(pattern);

console.log(result);