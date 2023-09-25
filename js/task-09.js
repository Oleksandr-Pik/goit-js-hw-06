// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('span');

changeColorBtn.addEventListener('click', onClick);

function onClick(evt) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}