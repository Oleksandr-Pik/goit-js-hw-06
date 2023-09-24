// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    input: document.querySelector('input'),
    boxes: document.querySelector('#boxes'),
};

let amountBoxes = 0;

refs.input.addEventListener('input', onInput);
refs.createBtn.addEventListener('click', onCreateBtn);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onInput(evt) {
    amountBoxes = Number(evt.currentTarget.value);
    return amountBoxes;
}

function onCreateBtn() {
    return createBoxes(amountBoxes);
}

function createBoxes(amount) {
    if (!amount) {
        alert('Введіть значенння або виберіть за допомогою стрілочок!');
    } else {
        for (let i = 1; i <= amount; i += 1) {
            const box = document.createElement("div");
            const size = 30 + i * 10;
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            refs.boxes.appendChild(box);
        }
    }
}

function destroyBoxes() {
    boxes.innerHTML = "";
}
