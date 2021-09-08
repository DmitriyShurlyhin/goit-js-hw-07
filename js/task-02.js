const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsRef = document.querySelector('#ingredients');

ingredients.forEach(ingridient => {
  const ingridientEl = document.createElement('li');

  ingridientEl.textContent = ingridient;
  ingridientsRef.append(ingridientEl);
});
