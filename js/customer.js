let products = JSON.parse(localStorage.getItem("product"));
let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
if (cartProducts === null) {
  cartProducts = [];
}
const productsContainer = document.querySelector("#customer .products");
function showProducts() {
  productsContainer.innerHTML = "";
  localStorage.setItem("product", JSON.stringify(products));
  products.forEach((product, i) => {
    // Create Product Container
    const productContainer = document.createElement("div");
    productContainer.className = "product";
    // Create Product Img
    const productImg = document.createElement("img");
    productImg.src = product.img;
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
    product.inCart
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
showProducts();

function handleAddToCart(e) {
  let product = e.target;
  let productIndex = product.dataset.productIndex;
  if (product.classList.contains("fa-cart-plus")) {
    product.className = "fa-solid fa-check";
    products[productIndex].inCart = !products[productIndex].inCart;
    cartProducts.push(products[productIndex]);
    console.log(cartProducts);
  } else if (product.classList.contains("fa-check")) {
    product.className = "fa-solid fa-cart-plus";
    products[productIndex].inCart = !products[productIndex].inCart;
    cartProducts.splice(productIndex, 1);
  }
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  showProducts();
}
