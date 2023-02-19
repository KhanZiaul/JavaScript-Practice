// array filter methods(it is non destructive)

// first example

const ages = [20,30,40,50,60,7,9];

const oldAges = ages.filter(function(age){

    return age > 29;
});

console.log(oldAges);

// second example

const persons = [
    {name:'zia',premium : true},
    {name:'ruman',premium :false},
    {name:'hasan', premium : true},
    {name:'etu', premium : false},
    {name:'megha', premium : true},
    {name:'tania', premium : false}

];

const premiumPerson = persons.filter(function(person){

    return person.premium;
});

console.log(premiumPerson);