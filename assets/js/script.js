// ===== Swiper Slider =====
// ===== Section: New Products =====
var newProductSwiper = new Swiper(".new-product-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".new-product-swiper-btn-next",
    prevEl: ".new-product-swiper-btn-prev",
  },
});

// ===== Section: New Deal =====
var newDealSwiper = new Swiper(".deal-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".deal-swiper-btn-next",
    prevEl: ".deal-swiper-btn-prev",
  },
});

// ===== Section: Team =====
var teamSwiper = new Swiper(".team-swiper", {
  spaceBetween: 30,
  loop: true,
  watchOverflow: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".team-swiper-btn-next",
    prevEl: ".team-swiper-btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// ===== Section: Category =====
var categorySwiper = new Swiper(".category-swiper", {
  spaceBetween: 30,
  loop: true,
  watchOverflow: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".category-swiper-btn-next",
    prevEl: ".category-swiper-btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

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
