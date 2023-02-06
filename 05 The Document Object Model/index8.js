// Event Basic (click)------------------->

// const button = document.querySelector('button');

// button.addEventListener('click', function(){
//     console.log('you clicked me');
// });

const iteams = document.querySelectorAll('li');

iteams.forEach(function(item){
    item.addEventListener('click',function(e){
        // console.log('clicked item');

       // console.log(e.target); // show sigle any iteam

       // console.log(e.iteam); // show double any iteam

       e.target.style.textDecoration = 'line-through';
    });
});