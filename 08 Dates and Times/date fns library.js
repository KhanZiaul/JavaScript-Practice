// date fns library

const now = new Date();

// console.log(dateFns.isToday(now));

// formating options

console.log(dateFns.format(now, 'YYYY'));

console.log(dateFns.format(now, 'MMM'));

console.log(dateFns.format(now, 'dddd'));


console.log(dateFns.format(now, 'Do'));

console.log(dateFns.format(now, 'dddd Do MMM YYYY'));

// comparing dates

const before = new Date('January 15 2023 12:00:00');

console.log(dateFns.distanceInWords(now,before));

console.log(dateFns.distanceInWords(now,before,{addSuffix:true}));