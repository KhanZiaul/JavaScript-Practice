// More dom events ------------------------------>

// copy event ----------------------------------->

const copy = document.querySelector('.copy-me');
copy.addEventListener('copy',function(){

    console.log('do not try at HOME')
});

// mousemove event -------------------------------->

const box = document.querySelector('.box');

box.addEventListener('mousemove',function(e){

   // console.log(e.offsetX , e.offsetY);

   box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

// wheel event ------------------------------------>

document.addEventListener('wheel', function(e){

    console.log(e.pageX , e.pageY);
});