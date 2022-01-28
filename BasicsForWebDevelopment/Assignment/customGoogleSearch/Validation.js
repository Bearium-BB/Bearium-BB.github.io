const $form = document.getElementById('form')
const $firstName = document.getElementById('first-name')
const $lastName = document.getElementById('last-name')
const $age = document.getElementById('age')
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
    let firstName = $firstName.value.trim();
    let lastName = $lastName.value.trim();
    let age = $age.value.trim();
    let email = $email.value.trim();

    let message = '';
    let valid = true;
    let count = 0;
    error.innerText = "";

    if (firstName === '') {
        message += 'First name is required\n'
        valid = false;
        count++;
    }

    if (lastName === '') {
        message += 'Last name is required\n'
        valid = false;
        count++;
    }

    if (age === '') {
        message += 'Age is required\n';
        valid = false;
        count++;

    } else {
        let ageInt = parseInt(age);
        if (isNaN(age) || (ageInt < 16 || ageInt > 120)) {
            message += 'Age is not valid\n';
            valid = false;
        }

    }

    if (email === '') {
        message += 'email is required\n';
        valid = false;
        count++;

    } else {
        if (!emailPattern.test(email)) {
            message += 'Email is not valid\n';
            valid = false;
        }
    }
    if (count === 4) {
        error.innerText += 'All felds are required.';
        error.style.display = 'block';
        animation('errorAnimation');

    } else if (!valid) {
        error.innerText += message;
        animation('errorAnimation');
        error.style.display = 'block';
    }
    if (valid) {
        error.style.display = 'none';
    }
}