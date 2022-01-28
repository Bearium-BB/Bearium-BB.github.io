const $form = document.getElementById('form')
const $firstName = document.getElementById('first-name')
const $lastName = document.getElementById('last-name')
const $password = document.getElementById('age')
const $email = document.getElementById('email')
const $submit = document.getElementById('submit')
const error = document.getElementById('error');

function animation(theAnimationName) {
    error.classList.add(theAnimationName);
    setTimeout(() => { error.classList.remove(theAnimationName) }, 1000);
}

$submit.addEventListener('click', () => {
    lookingErrors();
});


function lookingErrors() {
    const emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let firstName = $firstName.value.trim();
    let lastName = $lastName.value.trim();
    let password = $password.value.trim();
    let email = $email.value.trim();

    let message = '';
    let valid = true;
    let count = 0;
    error.innerText = "";

    if (firstName === '') {
        message += 'First name is required.\n'
        valid = false;
        count++;
    }

    if (lastName === '') {
        message += 'Last name is required.\n'
        valid = false;
        count++;
    }

    if (!passwordPattern.test(password)) {
        message += 'The password requires minimum 8 characters, at least 1 letter and 1 number.\n';
        valid = false;
        count++;
    }

    if (email === '') {
        message += 'email is required\n';
        valid = false;
        count++;

    } else {
        if (!emailPattern.test(email)) {
            message += 'Email is not valid.\n';
            valid = false;
        }
    }
    if (count === 4) {
        error.innerText += 'All felds are required.';
        animation('errorAnimation');
        error.style.display = 'block';

    } else if (!valid) {
        error.innerText += message;
        animation('errorAnimation');
        error.style.display = 'block';
    }
    if (valid) {
        error.innerText += 'your signup was successful.';
        animation('workAnimation');
        error.style.display = 'block';
    }
}