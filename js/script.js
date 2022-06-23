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

mobileNav.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav-element");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEL.classList.toggle("nav-open");
  });
});
