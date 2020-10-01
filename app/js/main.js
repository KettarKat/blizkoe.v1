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
    
    $("a.link").on("click", function(e){
      e.preventDefault();
      var anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 0
      }, 800);
  });
});  
