// const button = document.querySelector("#menu-button");
// const menu = document.querySelector("#menu");
// const closeMenu = document.querySelector("#close-button");

// button.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });
// if (closeMenu) {
//   closeMenu.addEventListener("click", () => {
//     menu.classList.add("hidden");
//   });
// }

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
