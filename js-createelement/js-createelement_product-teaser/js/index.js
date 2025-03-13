console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";


const product = document.createElement("article");
product.className = "product";

/*

product.innerHTML = `
<section class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">${name}</h2>
          <ul class="product__categories">
            <li class="product__category">${category1}</li>
            <li class="product__category">${category2}</li>
            <li class="product__category">${category3}</li>
          </ul>
          <p class="product__description">${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src=${imageSrc}
            alt=""
          />
        </div>
      </section>
      <footer class="product__footer">
        <span class="product__price">${price}</span>
        <button type="button" class="product__buy-button">Buy</button>
      </footer>
`;

*/

const productBody = document.createElement("section");
productBody.className = "product__body";

const productTextContainer = document.createElement("div");
productTextContainer.className = "product__text-container";

const productName = document.createElement("h2");
productName.className = "product__name";
productName.textContent = name;

const productCategories = document.createElement("ol");
productCategories.className = "product__categories";

const productCategory1 = document.createElement("li");
productCategory1.className = "product__category";
productCategory1.textContent = category1;

const productCategory2 = document.createElement("li");
productCategory2.className = "product__category";
productCategory2.textContent = category2;

const productCategory3 = document.createElement("li");
productCategory3.className = "product__category";
productCategory3.textContent = category3;

const productDescription = document.createElement("p");
productDescription.className = "product__description";
productDescription.textContent = description;

const productImageContainer = document.createElement("div");
productImageContainer.className = "product__image-container";

const productImage = document.createElement("img");
productImage.className = "product__image";
productImage.src = imageSrc;

const productFooter = document.createElement("footer");
productFooter.className = "product__footer";

const productPrice = document.createElement("span");
productPrice.className = "product__price";
productPrice.textContent = price;

const productBuyButton = document.createElement("button");
productBuyButton.className = "product__buy-button";
productBuyButton.textContent ="Buy";

productFooter.append(productPrice, productBuyButton);

productImageContainer.append(productImage);

productCategories.append(productCategory1, productCategory2, productCategory3);
productTextContainer.append(productName, productCategories, productDescription);

productBody.append(productTextContainer, productImageContainer);
product.append(productBody, productFooter);

const body = document.body;
body.append(product);

//FFFFFFUUUUUUUUUUU (ಠ_ಠ)