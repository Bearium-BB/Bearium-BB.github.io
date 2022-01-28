const option = document.getElementById('option');

const searchBar = document.getElementById('searchBar');

const search = document.getElementById('search');

const google = document.getElementById('google');

const bing = document.getElementById('bing');

const logIn = document.getElementById('logIn');

const form = document.getElementById('form');

const overlay = document.getElementById('overlay');

const error = document.getElementById('error');


const exitButton = document.getElementById('x');

const email = document.getElementById('email');

const password = document.getElementById('password');

const errorMessage = document.getElementById('errorMessage');

const submitLogin = document.getElementById('submitLogin');

var errorBool = false;

var LogInBool = false;

var drop = true;

var loginopen = true;

var passwordAs = 'Barium123';
var emailAs = 'Barium@gmail.com';
const emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/

submitLogin.addEventListener('click', function() {
    if (password.value === passwordAs && email.value === emailAs) {
        LogInBool = true;
        errorMessage.style.color = "green";
        errorMessage.innerText = 'your login'
    } else {
        errorMessage.style.color = "red";
        errorMessage.innerText = 'Wrong password or email'
    }
});





function getOption() {
    return option.value;
}

function downUp() {
    if (drop === true) {
        option.style.borderRadius = '8px 8px 0px 0px';
        google.style.display = 'block';
        bing.style.display = 'block';
        drop = false;
    } else {
        option.style.borderRadius = '8px';
        google.style.display = 'none';
        bing.style.display = 'none';
        drop = true;
    }

}

function animation(theAnimationName) {
    error.classList.add(theAnimationName)
    setTimeout(() => { error.classList.remove(theAnimationName) }, 1000);
}

function lookingErrors() {

    error.innerText = '';
    errorBool = true;

    if (LogInBool == false) {
        error.innerHTML += '<p>You must login.\n</p>';
        errorBool = true;
    }

    if (option.value == undefined) {
        error.innerHTML += '<p>Please select engine.\n</p>';
        errorBool = true;
    }

    if (searchBar.value == "" && option.value !== undefined && LogInBool == true) {
        error.innerHTML += '<p>Puts something in the search bar.\n</p>';
        errorBool = true;
    }

    if (errorBool == false) {
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
        animation('errorAnimation');
    }

}

function searching() {
    if (searchBar.value.length != 0 && option.value !== undefined && LogInBool === true) {
        if (getOption() == "Google") {
            window.location.href = "https://www.google.com/search?q=".concat(searchBar.value);
        } else {
            window.location.href = "https://www2.bing.com/search?q=".concat(searchBar.value);
        }
    }
    lookingErrors();
}


option.addEventListener('click', function() {
    downUp();
});


google.addEventListener('click', function() {
    option.value = google.value;

    option.innerText = google.value
    downUp();
});


bing.addEventListener('click', function() {
    option.value = bing.value;
    option.innerText = bing.value
    downUp();
});



search.addEventListener('click', function() {
    searching()
});


searchBar.addEventListener('keydown', function(event) {
    if (event.key == "Enter") {
        searching();
    }
});

function logInCloseAndOpen() {
    if (loginopen === true) {
        form.style.display = 'block';
        overlay.style.display = 'block';
        loginopen = false;
    } else {
        form.style.display = 'none';
        overlay.style.display = 'none';
        loginopen = true;
    }
}
logIn.addEventListener('click', function() {
    logInCloseAndOpen();
});
exitButton.addEventListener('click', function() {
    logInCloseAndOpen();
});