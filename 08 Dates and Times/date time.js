// Date & Time in JavaScript

const now = new Date();

console.log(now);

console.log(typeof now);


// Year , Months , Day , Times

console.log('getYear:',now.getFullYear());

console.log('getMonth:',now.getMonth());

console.log('getDate:',now.getDate());

console.log('getDay:',now.getDay());

console.log('getHours:',now.getHours());

console.log('getMinutes:',now.getMinutes());

console.log('getSeconds:',now.getSeconds());

// Time Stamp

console.log('timestamp:',now.getTime()); // time in milliseconds since 1970

// Date In String 

console.log('dateInString:',now.toDateString());

console.log('timeInString:',now.toTimeString());

console.log('timeInLocalString:',now.toLocaleTimeString());