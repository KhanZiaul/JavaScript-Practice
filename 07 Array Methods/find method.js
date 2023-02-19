// array find method

let scores = [10,30,40,50,60,30];

const result = scores.find(function(score){

    return score > 40; // it will return first value depend on condition then break the loop

});

console.log(result);