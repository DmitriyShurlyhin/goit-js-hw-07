const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsRef = document.querySelector('#ingredients');

// ingredients.forEach(ingridient => {
//   const ingridientEl = document.createElement('li');

//   ingridientEl.textContent = ingridient;
//   ingridientsRef.append(ingridientEl);
// });

const addIngredient = array =>
  array.map(element => {
    const itemOfListEl = document.createElement('li');
    itemOfListEl.textContent = element;
    return itemOfListEl;
  });

ingridientsRef.append(...addIngredient(ingredients));
