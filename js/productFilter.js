// ===== Product Filter =====
fetch("../partials/product-filter.html")
  .then((res) => res.text())
  .then((html) => {
    document.body.insertAdjacentHTML("beforeend", html);

    const productFilterButton = document.querySelector(".btn-product-filter");
    const productFilterSection = document.querySelector(".product-filter-section");
    const productFilterCloseButton = document.querySelector(
      ".product-filter-btn-close",
    );
    const productFilterApplyButton = document.querySelector(".product-filter-btn-apply");
    const headerActions = document.querySelector(".header-actions");
    const headerLogo = document.querySelector(".header-logo-container");

    const openProductFilter = () => toggleOverlay(productFilterSection, [headerActions, headerLogo], true);
    const closeProductFilter = () => toggleOverlay(productFilterSection, [headerActions, headerLogo], false);

    productFilterButton.addEventListener("click", openProductFilter);
    productFilterCloseButton.addEventListener("click", closeProductFilter);
    productFilterApplyButton.addEventListener("click", closeProductFilter)
    backgroundOverlay.addEventListener("click", closeProductFilter);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeProductFilter();
      }
    });
  });
