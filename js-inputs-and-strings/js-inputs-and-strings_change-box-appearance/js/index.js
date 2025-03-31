console.clear();

const box = document.querySelector('[data-js="box"]');
const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');

colorInput.addEventListener("input", () => {
   const color = colorInput.value;
   box.style.backgroundColor = `hsl(${color}, 100%, 50%)`;
});

radiusInput.addEventListener("input", () => {
  const radius = radiusInput.value; 
  box.style.borderRadius = radius + "%";
});

rotationInput.addEventListener("input", () => {
    const rotation = rotationInput.value;
    box.style.transform = `rotate(${rotation}deg)`;
});


