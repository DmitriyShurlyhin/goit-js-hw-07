const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (inputEl.value === '') {
    outputEl.textContent = 'незнакомец';
    return;
  }
  outputEl.textContent = event.currentTarget.value;
}
