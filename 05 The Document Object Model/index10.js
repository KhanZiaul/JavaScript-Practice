//event bubbling and deligation------------------------->

// Bubbling------------------------>

// const button = document.querySelector('button');

// button.addEventListener('click',function(){

//     const li = document.createElement('li');

//     li.textContent = 'new item';

//     ul.prepend(li);
// });

// const ul = document.querySelector('ul');

// const iteams= document.querySelectorAll('li');

// iteams.forEach(function(list){

//     list.addEventListener('click',function(e){

//         console.log('event in LI');

//         e.stopPropagation();

//         e.target.remove();
//     });
// });

// ul.addEventListener('click',function(e){

//     console.log('event in UL');
// });

// delegation ----------------------------------->

const button = document.querySelector('button');

button.addEventListener('click',function(){

    const li = document.createElement('li');

    li.textContent = 'new item';

    ul.prepend(li);
});

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){

    // console.log(e.target);

    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});