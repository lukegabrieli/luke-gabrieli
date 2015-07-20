// $('.icon-menu3').on('click', function() {
//   $('.main_nav').slideToggle(200);
// });

$('.icon-stack').on('click', function() {
  $('.main_nav').addClass('is-active');
  $('body').addClass('has-active-menu');
  $('.mask').addClass('is-active');
});

$('.icon-cross').on('click', function() {
  $('.main_nav').removeClass('is-active');
  $('body').removeClass('has-active-menu');
  $('.mask').removeClass('is-active');
});
