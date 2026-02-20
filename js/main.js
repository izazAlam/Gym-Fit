const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");
const darkerBar = document.querySelector(".darker-bar");

leftSection.addEventListener("click", () => {
  if (leftSection.classList.contains("active")) return;

  leftSection.classList.add("active");
  rightSection.classList.remove("active");

  darkerBar.style.left = "0";
});

rightSection.addEventListener("click", () => {
  if (rightSection.classList.contains("active")) return;

  rightSection.classList.add("active");
  leftSection.classList.remove("active");

  darkerBar.style.left = "156px";
});

const swiper = new Swiper(".swiper", {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 10,
});

const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");
const darker03 = document.querySelector(".darker-bar-03");

darker03.style.left = "0px";

prevButton.addEventListener("click", () => {
  swiper.slidePrev();
  const currentLeft = parseInt(darker03.style.left);

  if (currentLeft !== 0) {
    darker03.style.left = currentLeft - 132 + "px";
  }
});

nextButton.addEventListener("click", () => {
  swiper.slideNext();
  const currentLeft = parseInt(darker03.style.left);
  if (currentLeft <= 1180) {
    darker03.style.left = currentLeft + 132 + "px";
  }
});
