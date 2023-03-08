// let cartBtn = document.getElementById("cart-btn");

let total = document.querySelector(".total h3");

let products = JSON.parse(localStorage.getItem("cartProducts"));
if(localStorage.getItem("cartProducts") === null) {
  products = [];
}

let mainProducts = JSON.parse(localStorage.getItem("product"));
if(localStorage.getItem("product") === null) {
  mainProducts = [];
}

let sum = products.reduce((a, b) => a + +b.price, 0);
total.textContent = `Order Total : $${sum}`;

// cartBtn.addEventListener("click", addToCart);
const cartsContainer = document.querySelector(".mainContainer");
function addToCart() {
  cartsContainer.innerHTML = "";
  products.forEach((item, i) => {
    let contentDiv = document.createElement("div");
    contentDiv.className = "content";

    let imgDiv = document.createElement("div");
    imgDiv.className = "image";
    contentDiv.appendChild(imgDiv);

    let img = document.createElement("img");
    img.src = item.img;
    imgDiv.appendChild(img);

      let productName = document.createElement("h4");
    productName.textContent = item.name;
    imgDiv.appendChild(productName);

    let price = document.createElement("span");
    price.textContent = `$${item.price}`;
    contentDiv.appendChild(price);

    let del = document.createElement("i");
    del.className = "fa-solid fa-trash";
    del.id = "delete-cart";
    contentDiv.appendChild(del);
    del.id = i;
    del.addEventListener("click", (e) => {
      deleteCart(e);
      contentDiv.remove();
    });
    cartsContainer.appendChild(contentDiv)
  });
}
addToCart();

function deleteCart(e) {
  let ele = e.target.id;

products.splice(ele,1);
mainProducts[ele].inCart = false;
let sum = products.reduce((a, b) => a + +b.price, 0);
total.textContent = `Order Total : $${sum}`;
  localStorage.setItem("cartProducts", JSON.stringify(products));
  localStorage.setItem("product", JSON.stringify(mainProducts));
  addToCart();
}

