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
  document.body.addEventListener('scroll', function() {
    var el = $('header');
    var className = 'fixed';
    if (document.body.scrollTop > 115 ) {
    if (!el.hasClass(className))
    el.addClass(className);
    }
    else {
    if (el.hasClass(className))
    el.removeClass(className);
    }
    });
    
      $('.link-57').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#57m').offset().top }, 1000);
        e.preventDefault();
      });
      $('.link-90').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#90m').offset().top }, 1000);
        e.preventDefault();
      });
      $('.link-112').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#112m').offset().top }, 1000);
        e.preventDefault();
      });
      $('.link-105').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#105m').offset().top }, 1000);
        e.preventDefault();
      });
      $('.link-167').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#167m').offset().top }, 1000);
        e.preventDefault();
      });

});  
