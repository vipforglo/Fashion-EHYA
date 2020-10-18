$(document).ready(function () {
  var feedSlider = new Swiper('.swiper-container', {
    // Optional parameters

    loop: true,
    // autoplay: {
    //   delay: 1000,
    // },
    // Navigation arrows
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true

    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },


  });
});