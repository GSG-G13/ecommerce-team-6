let tname = document.getElementById("name");
let price = document.getElementById("price");
let img = document.getElementById("img");
let category = document.getElementById("category");
let submit = document.getElementById("submit-product");
let sec = document.getElementById("badyTable");

let mood = "add";
let temp;

let product = JSON.parse(localStorage.getItem("product"));
if (product === null) {
  product = [];
}
submit.onclick = function (eo) {
  eo.preventDefault();
  let newpro = {
    name: tname.value,
    price: price.value,
    img: img.value,
    category: category.value,
    inCart: false,
  };

  if (mood == "add") {
    product.push(newpro);
  } else {
    product[temp] = newpro;
  }
  readData();
  clearinp();
};
const readData = () => {
  sec.innerHTML = "";
  localStorage.setItem("product", JSON.stringify(product));

  product.forEach((p, i) => {
    // create Main div
    let div = document.createElement("div");
    div.className = "table-tbody mt-2";

    // create Image Container
    let imgContainer = document.createElement("div");
    imgContainer.className = "td-img";

    // create Image
    let imgTag = document.createElement("img");
    imgTag.src = p.img;

    let nameTag = document.createElement("div");
    let nameText = document.createTextNode(p.name);
    nameTag.appendChild(nameText);
    nameTag.className = "td";
    // price
    let priceTag = document.createElement("div");
    priceTag.className = "td-flex";
    let priceText = document.createTextNode(p.price);
    priceTag.textContent += "$";
    priceTag.appendChild(priceText);
    //category
    const categoryTag = document.createElement("div");
    categoryTag.className = "td-flex";
    let categoryText = document.createTextNode(p.category);
    categoryTag.appendChild(categoryText);
    //icon Container
    const iconContainer = document.createElement("div");
    iconContainer.className = "td-last justify-content-end";
    // del
    const iconDelTag = document.createElement("i");
    iconDelTag.className = "fa-solid fa-trash";
    iconDelTag.id = "del";
    iconDelTag.dataset.index = i;
    iconDelTag.onclick = onDelete;
    //edit
    const iconEditTag = document.createElement("i");
    iconEditTag.className = "fa-solid fa-pen-to-square";
    iconEditTag.id = "edit";
    iconEditTag.dataset.index = i;
    iconEditTag.onclick = onEdite;

    // append childs
    iconContainer.appendChild(iconDelTag);
    iconContainer.appendChild(iconEditTag);
    imgContainer.appendChild(imgTag);
    div.appendChild(imgContainer);
    div.appendChild(nameTag);
    div.appendChild(priceTag);
    div.appendChild(categoryTag);
    div.appendChild(iconContainer);
    sec.appendChild(div);
  });
};
readData();
const clearinp = () => {
  tname.value = "";
  price.value = "";
  img.value = "";
  category.value = "";
};

function onEdite(e) {
  mood = "Update";
  let index = e.target.dataset.index;
  popup.style.display = "block";
  overlay.className = "overlay";
  tname.value = product[index].name;
  price.value = product[index].price;
  img.value = product[index].img;
  category.value = product[index].category;
  temp = index;
  readData();
}
function onDelete(e) {
  let index = e.target.dataset.index;
  console.log(index);
  deleteItem(product, index)
  readData();
}