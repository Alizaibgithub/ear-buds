// ===== Swiper Slider =====
var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});

// var swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   direction: getDirection(),
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }
