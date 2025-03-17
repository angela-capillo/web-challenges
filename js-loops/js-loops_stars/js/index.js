console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let index = 1; index <= 5; index++) {
    star = document.createElement("img");
    if (index <= filledStars) {
      star.src = "assets/star-filled.svg";
    }
    else {
      star.src = "assets/star-empty.svg";
    }
    star.addEventListener("click", () => {
      renderStars(index);
    });
    starContainer.append(star);
  }
  

  // --^-- write or modify code above this line --^--
}

renderStars();
