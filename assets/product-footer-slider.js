$(document).ready(function() {
  if ($('.product-footer-slider').length > 0) {
    $('.product-footer-slider').slick({
      infinite: false,
      dots: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  }
});