// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    valueEl: document.querySelector('#value'),
};

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
});

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
});
