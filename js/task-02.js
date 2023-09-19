// Напиши скрипт, який для кожного елемента масиву ingredients:

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const liItemElements =[];

ingredients.forEach(ingridient => {
  const liItemEl = document.createElement('li');
  
  liItemEl.classList.add('item');
  liItemEl.textContent =ingridient;
  liItemElements.push(liItemEl)
});

document.querySelector('ul#ingredients').append(...liItemElements);






