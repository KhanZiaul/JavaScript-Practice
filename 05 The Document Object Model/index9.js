// creating and removing elements -------------------->

// const removing = document.querySelector('ul');

// removing.remove();

const ul = document.querySelector('ul');

const adding = document.querySelector('button');

adding.addEventListener('click',function(){

    // ul.innerHTML += '<li>New iteam</li>';

    const li = document.createElement('li');

    li.textContent = 'I am New';

    //ul.append(li);

    ul.prepend(li);
});

const iteams = document.querySelectorAll('li');

iteams.forEach(function(item){

item.addEventListener('click', function(e){

    // e.target.style.textDecoration = 'line-through';

    e.target.remove();
  });
});