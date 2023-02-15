var signInHtml = document.getElementById('sign-in');
var signUpHtml = document.getElementById('sign-up');
var home = document.getElementById('home');
var namee = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var signUpBtn = document.getElementById('signupbtn');
var signUpRequired = document.getElementById('sign-up-required');
var signUpSuccess = document.getElementById('sign-up-success');
var signUpEmailExists = document.getElementById('sign-up-email-exists');
var signInEmail = document.getElementById('sign-in-email');
var signInPassword = document.getElementById('sign-in-password');
var signInRequired = document.getElementById('sign-in-required');
var signInIncorrect = document.getElementById('sign-in-incorrect');
var welcome = document.getElementById('welcome');
var signInLogin = document.getElementById('sign-in-login');
var sU = document.getElementById('sU');
var sI = document.getElementById('sI')
var logoutt = document.getElementById('logout')

signUpBtn.addEventListener('click', signUp);
signInLogin.addEventListener('click', signIn);
sU.addEventListener('click', onSignUpLinkClick)
sI.addEventListener('click', onSignInLinkClick)
logoutt.addEventListener('click', logout)


var signUpArr;

(function () {
    if (localStorage.getItem('data') == null)
        signUpArr = []
    else {
        signUpArr = JSON.parse(localStorage.getItem('data'));
    }
})();

function onSignInLinkClick() {
    signInHtml.classList.replace("d-none", "d-flex");
    signUpHtml.classList.replace("d-flex", "d-none");
}

function onSignUpLinkClick() {
    signUpHtml.classList.replace("d-none", "d-flex");
    signInHtml.classList.replace("d-flex", "d-none");
}

function signUp() {
    signUpSuccess.classList.replace("d-flex", "d-none");
    signUpEmailExists.classList.replace("d-flex", "d-none");
    signUpRequired.classList.replace("d-flex", "d-none");

    if (namee.value == "" || email.value == "" || password.value == "") {
        signUpRequired.classList.replace("d-none", "d-flex");
        return;
    }

    for (var i = 0; i < signUpArr.length; i++) {
        if (email.value == signUpArr[i].email) {
            signUpEmailExists.classList.replace("d-none", "d-flex");
            return;
        }
    }

    signUpObj = {
        name: namee.value,
        email: email.value,
        password: password.value
    }
    signUpArr.push(signUpObj);
    localStorage.setItem('data', JSON.stringify(signUpArr));

    signUpSuccess.classList.replace("d-none", "d-flex");
}

function signIn() {
    signInRequired.classList.replace('d-flex', 'd-none')
    signInIncorrect.classList.replace('d-flex', 'd-none')

    if (signInEmail.value == '' || signInPassword.value == '') {
        signInRequired.classList.replace('d-none', 'd-flex')
        return;
    }

    for (var i = 0; i < signUpArr.length; i++) {
        if (signInEmail.value == signUpArr[i].email && signInPassword.value == signUpArr[i].password) {
            signInHtml.classList.replace('d-flex', 'd-none');
            home.classList.replace('d-none', 'd-block');
            box = ``;
            box += `welcome ${signUpArr[i].name}`;
            welcome.innerHTML = box;
            return;
        }
    }
    signInIncorrect.classList.replace('d-none', 'd-flex')
}

function logout() {
    home.classList.replace('d-block', 'd-none');
    signInHtml.classList.replace('d-none', 'd-flex');
    signInEmail.value = '';
    signInPassword.value = '';
}