// Напиши скрипт, який реагує на зміну значення input #font-size-control (подія input) і змінює інлайн-стиль span #text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    textElement: document.querySelector('#text'),
};

refs.fontSizeControl.addEventListener('input', () => {
  refs.textElement.style.fontSize = refs.fontSizeControl.value + "px";
});