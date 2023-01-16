let title='its a gaming book';
let author='khan zia';
let publication='2021';

//concatenation way of string

//let result = title+'.'+' '+'you can enjoy it.'+'Author Name :'+author+' '+'Publication Year :'+publication;
//console.log(result);

//template string

let result= `${title}.You can read this and you can enjoy it.Author Name: ${author}.Publication Year:${publication}.`;
console.log(result);

//creating html templates

let html= `
<h2> ${title} . </h2>  
<h3> You can read this and you can enjoy it . </h3>
<p> Author Name: ${author} . </p>
<p> Publication Year:${publication} . </p>`;
console.log(html);