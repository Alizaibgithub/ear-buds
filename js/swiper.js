// ===== Swiper Slider =====
// === Swiper: New Products ===
if (document.querySelector(".new-products-swiper")) {
  var newProductSwiper = new Swiper(".new-products-swiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".new-products-swiper-btn-next",
      prevEl: ".new-products-swiper-btn-prev",
    },
  });
}

// === Swiper: Deal ===
if (document.querySelector(".deal-swiper")) {
  var newDealSwiper = new Swiper(".deal-swiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".deal-swiper-btn-next",
      prevEl: ".deal-swiper-btn-prev",
    },
  });
}

// === Swiper: Team ===
if (document.querySelector(".team-swiper")) {
  var teamSwiper = new Swiper(".team-swiper", {
    loop: true,
    spaceBetween: 20,
    watchOverflow: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".team-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".team-swiper-btn-next",
      prevEl: ".team-swiper-btn-prev",
    },
    breakpoints: {
      320: {
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
}
// === Swiper: Categories ===
if (document.querySelector(".category-swiper")) {
  var categorySwiper = new Swiper(".category-swiper", {
    loop: true,
    spaceBetween: 20,
    watchOverflow: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".category-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".category-swiper-btn-next",
      prevEl: ".category-swiper-btn-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
}

// === Swiper: Product Details ===
if (document.querySelector(".product-thumbnail-swiper")) {
  var productThumbnailSwiper = new Swiper(".product-thumbnail-swiper", {
    loop: true,
    spaceBetween: 8,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: { slidesPerView: 3, direction: 'horizontal' },
      1025: { slidesPerView: 4, direction: 'vertical' },
    },
  });

  var productMediaSwiper = new Swiper(".product-media-swiper", {
    loop: true,
    spaceBetween: 8,
    navigation: {
      nextEl: ".product-media-swiper-btn-next",
      prevEl: ".product-media-swiper-btn-prev",
    },
    thumbs: {
      swiper: productThumbnailSwiper,
    },
  });
}