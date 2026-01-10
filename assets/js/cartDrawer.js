// ===== Cart Drawer Functionality =====
fetch("/assets/templates/cart-drawer.html")
  .then((res) => res.text())
  .then((html) => {
    document.body.insertAdjacentHTML("beforeend", html);

    const cartButton = document.querySelector(".header-btn-cart");
    const cartSection = document.querySelector(".cart-drawer-section");
    const cartCloseButton = document.querySelector(".cart-btn-close");

    const openCart = () => {
      cartSection.classList.add("active");
      backgroundOverlay.classList.add("active");
      document.body.classList.add("no-scroll");
      document.querySelector(".header").style.opacity = "0.5";
    };
    const closeCart = () => {
      cartSection.classList.remove("active");
      backgroundOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
      document.querySelector(".header").style.opacity = "1";
    };
    cartButton.addEventListener("click", openCart);
    cartCloseButton.addEventListener("click", closeCart);
    backgroundOverlay.addEventListener("click", closeCart);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCart();
      }
    });
  });
