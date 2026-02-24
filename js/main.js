document.addEventListener("DOMContentLoaded", function () {
  /* =======================
     TOP SLIDER SWITCH
  ======================= */

  const leftSection = document.querySelector(".left-section");
  const rightSection = document.querySelector(".right-section");
  const darkerBar = document.querySelector(".darker-bar");

  if (leftSection && rightSection && darkerBar) {
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
  }

  /* =======================
     SWIPER
  ======================= */

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
  const slidesPerView = swiper.params.slidesPerView;
  const movementCount = Math.max(0, itemCount - slidesPerView);

  if (darker03 && slider03Bar && itemCount > 0) {
    const barWidth = slider03Bar.clientWidth;
    const segments = movementCount + 1;
    const step = Math.round(barWidth / segments);
    const maxLeft = barWidth - step;

    darker03.style.width = step + "px";
    darker03.style.left = "0px";

    prevButton.addEventListener("click", () => {
      const currentLeft = parseInt(darker03.style.left) || 0;
      if (currentLeft > 0) {
        darker03.style.left = Math.max(0, currentLeft - step) + "px";
        swiper.slidePrev();
      }
    });

    nextButton.addEventListener("click", () => {
      const currentLeft = parseInt(darker03.style.left) || 0;
      if (currentLeft < maxLeft) {
        darker03.style.left = Math.min(maxLeft, currentLeft + step) + "px";
        swiper.slideNext();
      }
    });
  } else {
    prevButton?.addEventListener("click", () => swiper.slidePrev());
    nextButton?.addEventListener("click", () => swiper.slideNext());
  }

  /* =======================
     FOOTER TOGGLE (MOBILE)
  ======================= */

  const sectionWrappers = document.querySelectorAll(".section-wrapper");

  sectionWrappers.forEach((wrapper) => {
    const header = wrapper.querySelector(".section-header");
    const menu = wrapper.querySelector(".section-menu");

    if (header && menu) {
      header.addEventListener("click", function () {
        menu.classList.toggle("menu-open");
      });
    }
  });
});

const mobileHeader = document.querySelector(".menu");
const headerMenu = document.querySelector(".header-menu-items");

if (mobileHeader && headerMenu) {
  mobileHeader.addEventListener("click", function () {
    headerMenu.classList.toggle("open-header-menu");
  });
}
