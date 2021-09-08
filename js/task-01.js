const categories = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('.item');

console.log(`В списке ${categoryItems.length} категории`);

categoryItems.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}.`,
    `Количество элементов: ${element.lastElementChild.children.length}`,
  ),
);
