AOS.init();

window.addEventListener("scroll", (event) => {
  const header = document.querySelector(".header");
  if (window.pageYOffset > 0) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});

const hamburger = document.querySelector(".header-nav__hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
});

const buttonTestimonial = document.querySelector(".testimonial__button");
const testimonialBlur = document.querySelector(
  ".testimonial__card__wrapper__blur"
);

buttonTestimonial.addEventListener("click", (event) => {
  testimonialBlur.classList.toggle("not-active");

  if (buttonTestimonial.style.marginTop === "") {
    buttonTestimonial.style.marginTop = "2.5rem";
    buttonTestimonial.innerHTML = "Hide";
  } else {
    buttonTestimonial.style.marginTop = "";
    buttonTestimonial.innerHTML = "See all reviews";
  }
});
