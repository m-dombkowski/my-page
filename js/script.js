// ------------------- STICKY NAV -----------------------

const navigation = document.querySelector(".navigation");

const headerEL = document.querySelector(".header");

let navigationTop = navigation.offsetTop;

// const stickyNav = function () {
//   if (window.scrollY > navigationTop) {
//     navigation.classList.add("sticky");
//   } else {
//     navigation.classList.remove("sticky");
//   }
// };

const stickyNav = function () {
  if (window.scrollY > navigationTop) {
    headerEL.classList.add("sticky");
  } else {
    headerEL.classList.remove("sticky");
  }
};

window.addEventListener("scroll", stickyNav);

// ---------------- SMOOTH SCROLL --------------------

const allLinks = document.querySelectorAll(".nav-element");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      // console.log(sectionEL);
      sectionEL.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ------------------- MOBILE NAV ----------------

const mobileNav = document.querySelector(".btn-mobile-nav");

// const headerEL = document.querySelector(".header");

mobileNav.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav-element");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEL.classList.toggle("nav-open");
  });
});

const navIcon = document.getElementById("#nav-icon3");

const modeButton = document.querySelector(".btn-light-dark-mode");

// ---------------- DARK/LIGHT MODE ------------------------

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
