$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    mouseDrag: false,
    items: 1,
    nav: true,
    navText: ['<div class="arrow-left"></div>','<div class="arrow-right"></div>'],
    dots: true,
    loop:true,
    autoplay: true,
    smartSpeed: 700
  });

  $('#scroller').click(function () {
      $('body,html').animate({
           scrollTop: 0
       }, 400);
       return false;
   });
});
