const validationInputRef = document.querySelector('#validation-input');
const dataLengthValue = Number(validationInputRef.dataset.length);

validationInputRef.addEventListener('blur', () => {
  if (validationInputRef.value.length === dataLengthValue) {
    validationInputRef.classList.toggle('valid', true);
    validationInputRef.classList.toggle('invalid', false);
      } else {
    validationInputRef.classList.toggle('valid', false);
    validationInputRef.classList.toggle('invalid', true);
  }
});




console.log(dataLengthValue);
