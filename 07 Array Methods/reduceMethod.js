// array reduce method

const scores = [10,20,30,50,20,60,70];

// finding accumulatoR (COUNTING NUMBER)

// const result = scores.reduce(function(acc,curr){

//     if(curr> 30){
//         acc++;
//     }
//     return acc;
// },0);

// console.log(result);

// finding current value sum (COUNTING NUMBER TOTAL)

const result = scores.reduce(function(previousValue,currentValue){

    if(currentValue > 30){

        previousValue = previousValue + currentValue;
    }
    return previousValue;
},0);

// console.log(result);

// another exmaple

const personScores = [

    {name:'zia', score : 70},
    {name:'sebu', score : 50},
    {name:'zia', score : 50},
    {name:'mohi', score : 90},
];

const personScore = personScores.reduce(function(previousScore,currentScore){

    if(currentScore.name === 'zia' ){

        previousScore = previousScore + currentScore.score;
    }

    return previousScore;

},0);

console.log(personScore);

