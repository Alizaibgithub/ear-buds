// ===== Swiper Slider =====
// ===== Section: New Products =====
var newProductSwiper = new Swiper(".new-product-swiper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".new-product-swiper-btn-next",
    prevEl: ".new-product-swiper-btn-prev",
  },
});

// ===== Section: New Deal =====
var newDealSwiper = new Swiper(".deal-swiper", {
  loop: true,
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
  loop: true,
  spaceBetween: 30,
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
  loop: true,
  spaceBetween: 30,
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
