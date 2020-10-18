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

$(document).ready(function () {
  var tabsItem = $('.tabs-item');
  var contentItem = $('.card')
  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target')
    tabsItem.removeClass('tabs-item--active')
    contentItem.removeClass('card--active')
    $(activeContent).addClass('card--active');
    $(this).addClass('tabs-item--active')

  });

});