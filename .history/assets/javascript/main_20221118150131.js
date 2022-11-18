$(document).ready(function(){
  $('.main-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
      dots: true,
      prevArrow:"<button type='button' class='slick-arrow slick-prev'><i class='ti-angle-double-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-arrow slick-next'><i class='ti-angle-double-right'></i></button>"
    }); 
});
$(document).ready(function(){
  $('.body-product-item-wrap').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
      dots: true,
      prevArrow:"<button type='button' class='slick-arrow slick-prev'><i class='ti-angle-double-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-arrow slick-next'><i class='ti-angle-double-right'></i></button>"
    }); 
});
