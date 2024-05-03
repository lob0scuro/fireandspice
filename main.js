const modal = document.querySelector("dialog#modal");
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");

openModalButton.addEventListener("click", () => {
  modal.showModal();
});

closeModalButton.addEventListener("click", () => {
  modal.close();
});

const navToggler = document.getElementById("navToggler");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll("nav ul a");
for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    navLinks.classList.toggle("navOpen");
  });
}
navToggler.addEventListener("click", () => {
  navLinks.classList.toggle("navOpen");
});
