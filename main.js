var menuButton = document.getElementById("menu-btn");
var menuCloseButtton = document.getElementById("menu-close-btn");
var menuImage = document.getElementById("menu-img");

function openMenu() {
  menuButton.classList.toggle("hide-it");
  menuCloseButtton.classList.toggle("show-hidden");
  menuImage.classList.toggle("show-hidden");
}

function closeMenu() {
  menuButton.classList.toggle("show-hidden");
  menuCloseButtton.classList.toggle("hide-it");
  menuImage.classList.toggle("hide-it");
}

menuButton.addEventListener("click", openMenu);
menuCloseButtton.addEventListener("click", closeMenu);

console.log("Firend");
