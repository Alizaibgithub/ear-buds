// ===== Product Filter =====

fetch("../partials/product-filter.html")
  .then((res) => res.text())
  .then((html) => {
    document.body.insertAdjacentHTML("beforeend", html);

    // === Form Submit ===
    const productFilterForm = document.getElementById("product-filter-form");

    if (productFilterForm) {
      productFilterForm.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    }

    const productFilterButton = document.querySelector(".btn-show-product-filter");
    const productFilterSection = document.querySelector(".product-filter-section");
    const productFilterCloseButton = document.querySelector(
      ".btn-product-filter-close",
    );
    const productFilterApplyButton = document.querySelector(".btn-product-filter-apply");
    const headerActions = document.querySelector(".header-actions");
    const headerLogo = document.querySelector(".header-logo-wrapper");

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
