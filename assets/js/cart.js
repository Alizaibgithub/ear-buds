// ===== Cart Drawer Functionality =====
const body = document.body;
const cartButton = document.querySelector(".header-btn-cart");
const cartSection = document.querySelector(".cart-drawer-section");
const cartCloseButton = document.querySelector(".cart-btn-close");
const backgroundOverlay = document.querySelector(".background-overlay");

const openCart = () => {
  cartSection.classList.add("active");
  backgroundOverlay.classList.add("active");
  body.classList.add("no-scroll");
};
const closeCart = () => {
  cartSection.classList.remove("active");
  backgroundOverlay.classList.remove("active");
  body.classList.remove("no-scroll");
};
cartButton.addEventListener("click", openCart);
cartCloseButton.addEventListener("click", closeCart);
backgroundOverlay.addEventListener("click", closeCart);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
  }
});
