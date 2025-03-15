console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("Data: ", data);

  const formElements = event.target.elements;
  const firstName = formElements.firstName;

  form.reset();
  firstName.focus();
});
