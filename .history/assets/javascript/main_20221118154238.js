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
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 10000,
      draggable: true,
      dots: false,
      infinite:false,
      prevArrow:"<button type='button' class='slick-arrow slick-prev'><i class='ti-angle-double-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-arrow slick-next'><i class='ti-angle-double-right'></i></button>"
    }); 
});
// $(document).ready(function(){
//   $('.slide-body-product-item').slick({
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       draggable: true,
//       dots: false,
//       infinite:true,
//       prevArrow:"<button type='button' class='slick-arrow slick-prev'><i class='ti-angle-double-left' aria-hidden='true'></i></button>",
//       nextArrow:"<button type='button' class='slick-arrow slick-next'><i class='ti-angle-double-right'></i></button>"
//     }); 
// });
