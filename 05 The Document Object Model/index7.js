// parent, sibling and children

const article = document.querySelector('article');

//console.log(article);

// console.log(article.children);

// Array.from(article.children);

// console.log(Array.from(article.children));

// console.log(article.children);

// Array.from(article.children).forEach(child =>{

//     child.classList.add('children');
// });

// find parent of element------------->

const element = document.querySelector('h2');

console.log(element.parentElement);

console.log(element.parentElement.parentElement);

console.log(element.nextElementSibling);

console.log(element.previousElementSibling);

// chaining

console.log(element.nextElementSibling.parentElement.children);