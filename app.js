const toggleBtn = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
});
