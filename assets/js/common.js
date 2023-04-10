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

$('#menu-button').on('click', () => {
  $('.list, .close').toggleClass('hidden');
  $('.menu-list').toggleClass('hidden')
})