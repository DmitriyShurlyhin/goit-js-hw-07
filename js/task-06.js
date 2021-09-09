const inputEl = document.querySelector('#validation-input');
const validLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', validInputLength);

function validInputLength(event) {
  if (event.currentTarget.value.length === validLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
