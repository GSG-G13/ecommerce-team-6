let addBtn = document.getElementById("add-product");
let popup = document.querySelector(".popup");
let submitProduct = document.getElementById("submit-product");
let overlay = document.getElementById("overlay");


addBtn.addEventListener("click", showPopup);

function showPopup() {
  popup.style.display = "block";
  overlay.className = "overlay";
}


submitProduct.addEventListener("click", closePopup);
overlay.addEventListener("click", closeOverlay);

function closePopup() {
    closeOverlay();
  
}

function closeOverlay() {
  popup.style.display = "none";
  overlay.removeAttribute("class");
}