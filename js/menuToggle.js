// ===== Menu Toggle =====
const menuToggleButton = document.querySelector(".btn-menu-toggle");
const mainNavSection = document.querySelector(".main-nav");
const menuCloseButton = document.querySelector(".btn-menu-close");
const headerActions = document.querySelector(".header-actions");

const openMenu = () => toggleOverlay(mainNavSection, [headerActions], true);
const closeMenu = () => toggleOverlay(mainNavSection, [headerActions], false);

menuToggleButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);
backgroundOverlay.addEventListener("click", closeMenu);