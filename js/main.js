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
const slider03Bar = document.querySelector(".slider-03 .slider-03-bar");

const slider02Items = document.querySelectorAll(".slider-02 .card-item");
const itemCount = slider02Items.length;

const slidesPerView =
  (swiper && swiper.params && swiper.params.slidesPerView) || 4;

const movementCount = Math.max(0, itemCount - slidesPerView);

if (darker03 && slider03Bar && itemCount > 0) {
  const barWidth = slider03Bar.clientWidth || 1320;

  const step = segments > 0 ? Math.round(barWidth / segments) : barWidth;

  darker03.style.width = step + "px";
  darker03.style.left = "0px";

  const maxLeft = Math.max(0, barWidth - step);

  prevButton.addEventListener("click", () => {
    const currentLeft = parseInt(darker03.style.left) || 0;
    if (currentLeft > 0) {
      const newLeft = Math.max(0, currentLeft - step);
      darker03.style.left = newLeft + "px";
      swiper.slidePrev();
    }
  });

  nextButton.addEventListener("click", () => {
    const currentLeft = parseInt(darker03.style.left) || 0;
    if (currentLeft < maxLeft) {
      const newLeft = Math.min(maxLeft, currentLeft + step);
      darker03.style.left = newLeft + "px";
      swiper.slideNext();
    }
  });
} else {
  prevButton.addEventListener("click", () => swiper.slidePrev());
  nextButton.addEventListener("click", () => swiper.slideNext());
}
