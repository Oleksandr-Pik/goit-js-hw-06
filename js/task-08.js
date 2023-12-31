// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.js-login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    const {email, password} = evt.currentTarget.elements;

    if(!email.value || !password.value) {
        alert('Всі поля форми повинні бути заповнені!')
    } else {
        const data = {
            userEmail: email.value,
            userPassword: password.value,
        };
        console.log(data);
        form.reset();
    }
}