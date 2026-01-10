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

    const openProductFilter = () => {
      productFilterSection.classList.add("active");
      backgroundOverlay.classList.add("active");
      document.body.classList.add("no-scroll");
      document.querySelector(".header").style.opacity = "0.5";
    };
    const closeProductFilter = () => {
      productFilterSection.classList.remove("active");
      backgroundOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
      document.querySelector(".header").style.opacity = "1";
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
