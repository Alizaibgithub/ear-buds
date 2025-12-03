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
var newDealSwiper = new Swiper(".new-deal-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".new-deal-swiper-btn-next",
    prevEl: ".new-deal-swiper-btn-prev",
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

// ===== Google Map =====
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
s;
