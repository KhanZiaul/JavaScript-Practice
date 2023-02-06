// remove and add classes ---------------------->

// const para = document.querySelector('p');

// para.classList.add('error');

// para.classList.remove('error');

// para.classList.add('success');


const paras = document.querySelectorAll('p');

paras.forEach(para =>{

    if(para.textContent.includes('error')){

        para.classList.add('error');
    }
    if(para.innerText.includes('success')){

        para.classList.add('success');
    }
});

const title = document.querySelector('h2');

title.classList.toggle('header');