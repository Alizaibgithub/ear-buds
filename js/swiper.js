// ===== Swiper Slider =====
// ===== Section: New Products =====
if (document.querySelector(".new-product-swiper")) {
  var newProductSwiper = new Swiper(".new-product-swiper", {
    loop: true,
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".new-product-swiper-btn-next",
      prevEl: ".new-product-swiper-btn-prev",
    },
  });
}
// ===== Section: New Deal =====
if (document.querySelector(".deal-swiper")) {
  var newDealSwiper = new Swiper(".deal-swiper", {
    loop: true,
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".new-product-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".deal-swiper-btn-next",
      prevEl: ".deal-swiper-btn-prev",
    },
  });
}

// ===== Section: Team =====
if (document.querySelector(".team-swiper")) {
  var teamSwiper = new Swiper(".team-swiper", {
    loop: true,
    spaceBetween: 30,
    watchOverflow: true,
    autoplay: {
      delay: 2500,
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
// ===== Section: Categories =====
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
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
}



// ===== Section: Product Details =====
if (document.querySelector(".product-thumbnail-swiper")) {
  var productThumbnailSwiper = new Swiper(".product-thumbnail-swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var productMediaSwiper = new Swiper(".product-media-main-swiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".product-media-swiper-btn-next",
      prevEl: ".product-media-swiper-btn-prev",
    },
    thumbs: {
      swiper: productThumbnailSwiper,
    },
  });
}