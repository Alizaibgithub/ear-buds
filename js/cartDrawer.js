// ===== Cart Drawer =====
fetch("../partials/cart-drawer.html")
  .then((res) => res.text())
  .then((html) => {
    document.body.insertAdjacentHTML("beforeend", html);

    const cartButton = document.querySelector(".header-btn-cart");
    const addToCartButtons = document.querySelectorAll(".btn-atc");
    const cartSection = document.querySelector(".cart-drawer-section");
    const cartCloseButton = document.querySelector(".cart-btn-close");
    const menuToggleButton = document.querySelector(".btn-menu-toggle");
    const headerLogo = document.querySelector(".header-logo-container");

    const openCart = () => toggleOverlay(cartSection, [menuToggleButton, headerLogo], true);
    const closeCart = () => toggleOverlay(cartSection, [menuToggleButton, headerLogo], false);

    cartButton.addEventListener("click", openCart);
    addToCartButtons.forEach((addToCartButton) => {
      addToCartButton.addEventListener("click", openCart)
    })

    cartCloseButton.addEventListener("click", closeCart);
    backgroundOverlay.addEventListener("click", closeCart);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCart();
      }
    });
  });
