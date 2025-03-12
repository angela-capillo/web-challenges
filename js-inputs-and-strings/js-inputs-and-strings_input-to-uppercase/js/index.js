console.clear();

const inputElement = document.querySelector('[data-js="first-input"]');
const buttonUppercase = document.querySelector('[data-js="button-uppercase"]');

buttonUppercase.addEventListener("click", () => {
    inputElement.value.toUpperCase();
    inputElement.value = inputElement.value.toUpperCase();
  });
