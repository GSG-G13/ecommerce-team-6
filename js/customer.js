const products = [
  {
    id: 0,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    name: "Fjallraven",
    category: "men's clothing",
    price: 20,
    isInCart: false,
  },
  {
    id: 1,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    name: "Mens Cotton",
    category: "men's clothing",
    price: 30,
    isInCart: false,
  },
  {
    id: 2,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    name: "WD 2TB Elements",
    category: "electronics",
    price: 64,
    isInCart: false,
  },
  {
    id: 3,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    name: "Rain Jacket",
    category: "women's clothing",
    price: 20,
    isInCart: false,
  },
];
const cartProducts = [];

/* <div class="card">
  <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="product">
  <div class="name">Mens Casual Slim Fit</div>
  <div class="category">men's clothing</div>
  <div class="info">
    <div class="price">20$</div>
    <i class="fa-solid fa-cart-plus"></i>
  </div>
</div> */

const productsContainer = document.querySelector("#customer .products");
function showProducts(products) {
  productsContainer.innerHTML = "";
  products.forEach((product, i) => {
    // Create Product Container
    const productContainer = document.createElement("div");
    productContainer.className = "product";
    // Create Product Img
    const productImg = document.createElement("img");
    productImg.src = product.image;
    // Create Product Name
    const productName = document.createElement("div");
    productName.className = "name";
    const productNameText = document.createTextNode(product.name);
    productName.appendChild(productNameText);
    // Create Product Category
    const productCategory = document.createElement("div");
    productCategory.className = "category";
    const productCategoryText = document.createTextNode(product.category);
    productCategory.appendChild(productCategoryText);
    // Create Product Info
    const productInfo = document.createElement("div");
    productInfo.className = "info";
    // Create Product Price
    const productPrice = document.createElement("div");
    const productPriceText = document.createTextNode(product.price);
    productPrice.append(productPriceText);
    // Create Product Add to Cart Icon
    const addCart = document.createElement("i");
    product.isInCart
      ? (addCart.className = "fa-solid fa-check")
      : (addCart.className = "fa-solid fa-cart-plus");
    addCart.dataset.productIndex = i;
    addCart.onclick = handleAddToCart;
    // Append Childes
    productInfo.appendChild(productPrice);
    productInfo.appendChild(addCart);
    productContainer.appendChild(productImg);
    productContainer.appendChild(productName);
    productContainer.appendChild(productCategory);
    productContainer.appendChild(productInfo);
    productsContainer.appendChild(productContainer);
  });
}
showProducts(products);

function handleAddToCart(e) {
  let product = e.target;
  let productIndex = product.dataset.productIndex;
  if (product.classList.contains("fa-cart-plus")) {
    product.className = "fa-solid fa-check";
    products[productIndex].isInCart = !products[productIndex].isInCart;
  } else if (product.classList.contains("fa-check")) {
    product.className = "fa-solid fa-cart-plus";
    products[productIndex].isInCart = !products[productIndex].isInCart;
  }
  showProducts(products);
}
