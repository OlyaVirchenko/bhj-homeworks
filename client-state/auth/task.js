const signButton = document.querySelector('#signin__btn');
const form = document.querySelector('#signin__form');
const welcomeText = document.querySelector('#welcome');
const signin = document.querySelector('#signin');
const user = document.querySelector('#user_id');
let requestURL = 'https://students.netoservices.ru/nestjs-backend/auth';

autoEnterUser();

form.addEventListener('click', el => {
    e.preventDefault();
    upload(form, requestURL, requestHandler())
    form.reset();
    e.preventDefault();
});


function upload(data, url, callback){
    const xhr = new XMLHttpRequest;
    const formData = new FormData(data);
    xhr.open('POST', url, true);
    xhr.send(formData);

    xhr.responseType = 'json';
    xhr.onload = () => callback(xhr.response);
}

function requestHandler(response) {
    if (response.success === true) {
        signin.classList.remove('signin_active');
        welcomeText.classList.add('welcome_active');
        saveActiveUser(user.textContent)
        user.innerText = response.user_id;
    } else if (response.success === false) {
        alert('Неверный логин или пароль')
    }
}

function saveActiveUser(user) {
    localStorage.setItem('activeUserId', user)
}

function autoEnterUser() {
    if (localStorage.getItem('activeUserId')) {
        signin.classList.remove('signin_active');
        welcomeText.classList.add('welcome_active');
        user.innerText = localStorage.getItem('userActiveId');
    }
}


