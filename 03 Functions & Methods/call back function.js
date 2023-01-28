// callback function

// function valueIs(comingMan){
//     let value=50;
//     comingMan(value);
// }

// valueIs(function callbackFunction(value){
//    console.log (value);
// });

//---------------------------------->

let ages=[10,20,30,40,50,60,70,80,90];

// ages.forEach(function (value,index){

// console.log(index,value);
//   }
// )

function callbackFun(value,index){
    console.log(`${index} - age - ${value}`);
}

ages.forEach(callbackFun);
