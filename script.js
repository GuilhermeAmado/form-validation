const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequiredFields(inputArray) {
    inputArray.forEach(function(input) {
        if(!input.value) {
            showError(input, `${input.placeholder} is required`)
        } else {
            showSuccess(input);
        }
    });
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequiredFields([username, email, password, password2]);
});