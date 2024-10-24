///////////////////////////////////////////////////////////
// Copyright-Jahr automatisch aktualisieren
///////////////////////////////////////////////////////////

const displayedYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();

displayedYear.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile-Nav öffnen und schliessen
///////////////////////////////////////////////////////////

const btnMainNavMobile = document.querySelector(".btn-main-nav-mobile");
const headerEl = document.querySelector(".header");

btnMainNavMobile.addEventListener("click", function () {
  headerEl.classList.toggle("main-nav-mobile-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling für anchor elements inkl. Safari

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (headerEl.classList.contains("main-nav-mobile-open")) {
      headerEl.classList.toggle("main-nav-mobile-open");
    }

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky Nav
window.addEventListener("scroll", function () {
  headerEl.classList.toggle("sticky", window.scrollY > 0);
});
