const menuToggleButton = document.querySelector(".btn-menu-toggle");
const mainNavSection = document.querySelector(".main-nav");
const menuCloseButton = document.querySelector(".menu-btn-close");

const openMenu = () => {
  mainNavSection.classList.add("active");
  backgroundOverlay.classList.add("active");
  document.body.classList.add("no-scroll");
  menuToggleButton.style.opacity = "0.5";
};
const closeMenu = () => {
  mainNavSection.classList.remove("active");
  backgroundOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
  menuToggleButton.style.opacity = "1";
};
menuToggleButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);
backgroundOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductFilter();
  }
});
