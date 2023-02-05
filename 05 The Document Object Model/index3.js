// adding and changing page content

// const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText = 'khan zia';

// para.innerText += ' I AM JAVASCRIPT MAN !!';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {

//     console.log(para.innerText);

//     para.innerText += ' WELCOME ME MAN, I AM JS';
//  });

const divIs = document.querySelector('.div-htmlTag');

// console.log(divIs.innerHTML);

// divIs.innerHTML = '<h2>I CAN CHANGE YOUR TAG</h2>';

// divIs.innerHTML += '<h2>YOU ARE SAVE FOR A MOMENT</h2>';

const names = ['khan', 'zia', 'Megha'];

names.forEach(name => {

    divIs.innerHTML += `<p> ${name} </p> `;
});