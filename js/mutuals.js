// ------------------------ DARK/LIGHT MODE ---------------------------------

const modeButton = document.querySelector(".btn-light-dark-mode");

modeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const body = document.body;
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const btnMode = document.querySelector(".btn-light-dark-mode");

const mode = function () {
  if (body.classList.contains("dark")) {
    sun.style.display = "block";
    moon.style.display = "none";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
  }
};

btnMode.addEventListener("click", mode);

mode();
