const products = [
  {
    id: 0,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
    price: 20,
  },
  {
    id: 1,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    name: "Mens Cotton Jacket",
    category: "men's clothing",
    price: 30,
  },
  {
    id: 2,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    category: "electronics",
    price: 64,
  },
  {
    id: 3,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    category: "women's clothing",
    price: 20,
  },
];

if (localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
}
