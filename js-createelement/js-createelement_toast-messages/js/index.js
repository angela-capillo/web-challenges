console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const toastElement = document.createElement("li");
  toastElement.className = "toast-container__message";
  toastElement.textContent = "I'm a toast message.";
  toastContainer.append(toastElement);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
