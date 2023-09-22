// Напиши скрипт, який під час набору тексту в інпуті input #name-input (подія input), підставляє його поточне значення в span #name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', event => {
    if (!event.currentTarget.value) {
        refs.output.textContent = 'Anonymous';
    } else {
        refs.output.textContent = event.currentTarget.value;
    }
});
