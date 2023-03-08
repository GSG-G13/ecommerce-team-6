const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tabcontent");
const activateTab = (tabnum) => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active");
  });
  document.querySelector("#tab" + tabnum).classList.add("active");
  document.querySelector("#tabcontent" + tabnum).classList.add("active");
  localStorage.setItem("jstabs-opentab", JSON.stringify(tabnum));
};
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateTab(tab.dataset.tab);
  });
});
const opentab = JSON.parse(localStorage.getItem("jstabs-opentab")) || "1";
activateTab(opentab);

// Local Storage for Client Form

// Client form
const clientForm = document.getElementById("f-c");
const clientUsername = document.getElementById("c-username");
const clientPassword = document.getElementById("c-password");
const clientSignInButton = document.getElementById("signin-btn");
const clientSignUpButton = document.getElementById("signup-btn");
const clientGuestButton = document.getElementById("guest-btn");

// Admin form
const adminForm = document.getElementById("f-s");
const adminUsername = document.getElementById("username");
const adminPassword = document.getElementById("s-password");
const adminLoginButton = document.getElementById("s-login-button");

// Default user data
const defaultClient = {
  username: "com",
  password: "com",
  // username: 'client@mail.com',
  // password: 'password',
};
const defaultAdmin = {
  username: "admin@mail.com",
  password: "password",
};

// Add default user and admin to local storage
localStorage.setItem("client", JSON.stringify([defaultClient]));
localStorage.setItem("admin", JSON.stringify([defaultAdmin]));

// Check if the user is logged in
let isLoggedIn = false;
let role = localStorage.getItem("role");
console.log(role);
// window.location.href = role == "client" ? "customer.html" : role == "client"?"seller.html";
if (role == "client") {
  window.location.href = "customer.html";
} else if (role == "admin") {
  window.location.href = "seller.html";
}

// Load user data from local storage
const loadUserData = (userType) => {
  const userData = JSON.parse(localStorage.getItem(userType));

  if (userData) {
    return userData;
  } else {
    return userType === "client" ? defaultClient : defaultAdmin;
  }
};

// Save user data to local storage
const saveUserData = (userType, data) => {
  localStorage.setItem(userType, JSON.stringify(data));
};

// Handle client sign in
clientSignInButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = loadUserData("client")[0];
  localStorage.setItem("role", "client");
  if (
    clientUsername.value == userData.username &&
    clientPassword.value == userData.password
  ) {
    isLoggedIn = true;
    saveUserData("client", {
      username: userData.username,
      password: userData.password,
    });
    window.location.href = "customer.html";
  } else {
    alert("Client Invalid username or password");
    clientPassword.value = "";
  }
});

// Handle client sign up
// clientSignUpButton.addEventListener("click", () => {
clientForm.addEventListener("submit", () => {
  const username = document.querySelector("#c-username").value;
  const password = document.querySelector("#c-password").value;

  if (username == "" || password == "" || !username.includes("@")) {
    alert("Please fill in all the fields");
    return;
  }
  saveUserData(
    "client",
    localStorage.getItem("client")
      ? [...JSON.parse(localStorage.getItem("client")), { username, password }]
      : [{ username, password }]
  );
  localStorage.setItem("role", "client");
  console.log("Sign up successful!");
  isLoggedIn = true;
  window.location.href = "customer.html";
});

// Handle admin login
adminForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = loadUserData("admin")[0];

  if (
    adminUsername.value === userData.username &&
    adminPassword.value === userData.password
  ) {
    isLoggedIn = true;
    localStorage.setItem("role", "admin");
    saveUserData("admin", {
      username: userData.username,
      password: userData.password,
    });

    window.location.href = "seller.html";
  } else {
    alert("Admin Invalid username or password");
    adminPassword.value = "";
  }
});

// Handle guest button
clientGuestButton.addEventListener("click", (e) => {
  isLoggedIn = true;
  localStorage.setItem("role", "client");
  e.preventDefault();
    window.location.href = "customer.html";
});
