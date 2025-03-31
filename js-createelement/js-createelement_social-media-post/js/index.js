console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const postContainer = document.createElement("article");
postContainer.className = "post";

const postContent = document.createElement("p");
postContent.className = "post__content";
postContent.textContent = "Candy Mountain is not as cool as ppl say ⛰️🦄"

const postFooter = document.createElement("footer");
postFooter.className = "post__footer";

const postUsername = document.createElement("span");
postUsername.className = "post__username";
postUsername.textContent = "@CharlieTheUnicorn"

const postButton = document.createElement("button");
postButton.className = "post__button";
postButton.textContent = "♥ Like";

postFooter.append(postUsername, postButton);
postContainer.append(postContent, postFooter);

const body = document.body;

body.append(postContainer);

postButton.addEventListener("click", handleLikeButtonClick);


