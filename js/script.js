const navigation = document.querySelector(".navigation");

let navigationTop = navigation.offsetTop;

const stickyNav = function () {
  if (window.scrollY > navigationTop) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
};

window.addEventListener("scroll", stickyNav);

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
