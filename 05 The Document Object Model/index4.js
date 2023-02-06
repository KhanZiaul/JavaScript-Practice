// getting and setting attributes--------------->

const attributes = document.querySelector('a');

console.log(attributes.getAttribute('href'));

attributes.setAttribute('href','https://www.programming-hero.com');

console.log(attributes.getAttribute('href'));

attributes.innerText = 'Programming-hero';

const styles = document.querySelector('p');

console.log(styles.getAttribute('class'));

styles.setAttribute('class','success');

console.log(styles.getAttribute('class'));

styles.setAttribute('style','color:green');