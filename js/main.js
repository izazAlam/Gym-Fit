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

new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
