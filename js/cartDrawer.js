// ===== Cart Drawer =====

fetch("../partials/cart-drawer.html")
  .then((res) => res.text())
  .then((html) => {
    document.body.insertAdjacentHTML("beforeend", html);

    const cartButton = document.querySelector(".header-btn-cart");
    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
    const cartDrawerSection = document.querySelector(".cart-drawer-section");
    const cartCloseButton = document.querySelector(".btn-cart-close");
    const menuToggleButton = document.querySelector(".btn-open-menu");
    const headerLogo = document.querySelector(".header-logo-wrapper");

    const openCartDrawer = () => toggleOverlay(cartDrawerSection, [menuToggleButton, headerLogo], true);
    const closeCartDrawer = () => toggleOverlay(cartDrawerSection, [menuToggleButton, headerLogo], false);

    cartButton.addEventListener("click", openCartDrawer);
    addToCartButtons.forEach((addToCartButton) => {
      addToCartButton.addEventListener("click", openCartDrawer)
    })

    cartCloseButton.addEventListener("click", closeCartDrawer);
    backgroundOverlay.addEventListener("click", closeCartDrawer);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCart();
      }
    });
  });
