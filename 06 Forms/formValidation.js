// Basic form validation --------------------------------------->

const form = document.querySelector('.signup-form');

const feedback = document.querySelector('#feedback');

form.addEventListener('submit', e=> {

    e.preventDefault();

    // validation

    const username = form.username.value;

    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        //feedback

        feedback.textContent = 'Your input valid';
    }

    else{

        feedback.textContent ='you should enter a-z|A-Z letters and it should be 6 to 12';
    }
});