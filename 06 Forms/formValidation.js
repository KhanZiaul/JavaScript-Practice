// Basic form validation --------------------------------------->

const form = document.querySelector('.signup-form');

const feedback = document.querySelector('#feedback');

form.addEventListener('submit', e=> {

    e.preventDefault();

    // validation
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    const username = form.username.value;

    if(usernamePattern.test(username)){
        //feedback

        feedback.textContent = 'Your input valid';
    }

    else{

        feedback.textContent ='You should enter a-z|A-Z letters and it should be 6 to 12';
    }
});

// live feedback---------------------

form.username.addEventListener('keyup', e => {

    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(e.target.value)){

        form.username.setAttribute('id', 'success')

    }

    else{

        form.username.setAttribute('id','error');
    }
});
