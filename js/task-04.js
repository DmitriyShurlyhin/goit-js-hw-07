const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');

let count = 0;
btnDec.addEventListener('click', decrement);
btnInc.addEventListener('click', increment);

function decrement(event) {
  count -= 1;
  value.textContent = count;
}

function increment(event) {
  count += 1;
  value.textContent = count;
}
