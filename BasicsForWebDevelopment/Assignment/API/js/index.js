let rememberMe = document.getElementById('rememberMe');
let login = document.getElementById('loginBut');
let email = document.getElementById('email');
let password = document.getElementById('password');
let rememberMeBool = false;

rememberMe.addEventListener('change', function() {
    if (rememberMeBool)
        rememberMeBool = false
    else
        rememberMeBool = true

});

login.addEventListener('click', function() {
    window.location.href = './profile.html'
    if (rememberMeBool) {
        const user = [{ email: email.value, password: password.valu, rememberMe: rememberMeBool }];
        const stringfiedUser = JSON.stringify(user);
        localStorage.setItem('user', stringfiedUser);
        console.log(localStorage);
    }
});

const usersLogin = JSON.parse(localStorage.getItem('user'))

console.log(usersLogin);
if (usersLogin.email != '' && usersLogin.password != '') {
    window.location.href = './profile.html'
    console.log('test')
}