// array sort method


// first example

// const names = ['zia','megha','abdullah','sebu'];

// names.sort();

// names.reverse();

// console.log(names);

// second example

const scores = [10,20,30,40,50,60,20,30,40,50,100];

//scores.sort(); // it is not correct way to sort number ,, because sort method take first letter or number

//console.log(scores);

scores.sort(function(a,b){ // accending order

    return a-b;
});

console.log(scores);

scores.sort(function(a,b){ // deccending order

    return b-a;
});

console.log(scores);


// third example by objects

const personsSecores = [
    {name:'zia', score :50 },

    {name:'megha', score :30 },

    {name:'tania', score :100 },

    {name:'rumman', score :70 }
];

personsSecores.sort(function(a,b){

    return a.score - b.score;
});

console.log(personsSecores);

personsSecores.sort(function(a,b){

    return b.score - a.score;
});

console.log(personsSecores);