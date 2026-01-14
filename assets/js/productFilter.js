fetch("/assets/templates/product-filter.html")
  .then((res) => res.text())
  .then((html) => {
    document.body.insertAdjacentHTML("beforeend", html);

    const productFilterButton = document.querySelector(".btn-product-filter");
    const productFilterSection = document.querySelector(
      ".product-filter-section"
    );
    const productFilterCloseButton = document.querySelector(
      ".product-filter__btn-close"
    );
    const headerActions = document.querySelector(".header-actions");
    const headerLogo = document.querySelector(".header-logo-container");

    const openProductFilter = () => {
      productFilterSection.classList.add("active");
      backgroundOverlay.classList.add("active");
      document.body.classList.add("no-scroll");
      headerActions.style.opacity = "0.5";
      headerLogo.style.opacity = "0.5";
    };
    const closeProductFilter = () => {
      productFilterSection.classList.remove("active");
      backgroundOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
      headerActions.style.opacity = "1";
      headerLogo.style.opacity = "1";
    };
    productFilterButton.addEventListener("click", openProductFilter);
    productFilterCloseButton.addEventListener("click", closeProductFilter);
    backgroundOverlay.addEventListener("click", closeProductFilter);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeProductFilter();
      }
    });
  });
