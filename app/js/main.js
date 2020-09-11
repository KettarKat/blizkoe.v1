$(function(){
  $('.sales__btn-right').on('click', function(){
    $('.sales__address-object').addClass('active');
    $('.sales__btn-right').addClass('active');
    $('.sales__btn-left').removeClass('active');
    $('.sales__address-town').removeClass('active');
  });
  $('.sales__btn-left').on('click', function(){
    $('.sales__address-town').addClass('active');
    $('.sales__btn-left').addClass('active');
    $('.sales__btn-right').removeClass('active');
    $('.sales__address-object').removeClass('active');
  });
})