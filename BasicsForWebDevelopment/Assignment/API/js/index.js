let rememberMe = document.getElementById('rememberMe');
let login = document.getElementById('loginBut');
let email = document.getElementById('email');
let password = document.getElementById('password');
let incorrectPE = document.getElementById('incorrectPE')
let rememberMeBool = false;
console.log(localStorage)


const passwordEmail = {
    email: 'bob@gmail.com',
    password: 'bob2000',
};
const stringfiedPasswordEmail = JSON.stringify(passwordEmail);
localStorage.setItem('passwordEmail', stringfiedPasswordEmail);



rememberMe.addEventListener('click', function() {
    if (rememberMeBool)
        rememberMeBool = false
    else
        rememberMeBool = true
});

login.addEventListener('click', function() {
    const uesrC = JSON.parse(localStorage.getItem('passwordEmail'))
    console.log(localStorage)
    console.log(uesrC)
    if (uesrC.email == email.value && uesrC.password == password.value) {
        const user = { email: email.value, password: password.value, rememberMe: rememberMeBool };
        const stringfiedUser = JSON.stringify(user);
        localStorage.setItem('user', stringfiedUser);
        window.location.href = './profile.html'
    } else {
        console.log('test')
        incorrectPE.style.opacity = 1;
    }
});

const usersLogin = JSON.parse(localStorage.getItem('user'))

if (usersLogin != null) {
    if (usersLogin.rememberMe) {
        console.log(usersLogin.rememberMe)
        window.location.href = './profile.html'
    }
};