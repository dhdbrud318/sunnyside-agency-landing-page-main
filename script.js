// Header Color change while scrolling

$(document).on("scroll", function () {
  if ($(window).scrollTop() > window.innerHeight) {
    $("#header").addClass("header-active");
  } else {
    $("#header").removeClass("header-active");
  }
});

const mobile_nav_btn = document.querySelector("#mobile-nav-icon");
const mobile_nav = document.querySelector("#mobile-nav");

mobile_nav_btn.addEventListener("click", function () {
  mobile_nav.classList.toggle("nav-active");
});
