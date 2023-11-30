$(document).ready(function(){
    $('.car-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });
  $(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true, 
        autoplaySpeed: 3000 
    });
});
$(document).ready(function(){
  $('.car-carousel').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev">&#9664;</button>',
      nextArrow: '<button type="button" class="slick-next">&#9654;</button>'
  });
});
