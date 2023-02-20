// JavaScript time stamp and comparisons

const before = new Date('january 15 2023 12:00:00');

const now = new Date();

// console.log(now.getTime(), before);

// console.log(now.getTime(), before.getTime());

const difference = now.getTime() - before.getTime();

// console.log(difference);

const minutes = Math.round(difference/1000/60);

// console.log(minutes);

const hours = Math.round(minutes / 60);

// console.log(hours);

const days = Math.round(hours / 24);

// console.log(days);

console.log(`The blog was written ${days} days ago`);

// covert time stamp into dte object

const timestamp = 1675938474990;

console.log(new Date(timestamp));