$(document).ready(function(){

  var nav = $('.total_nav');

  $(window).on('resize load', function(){
    var width = $(window).width();
    if(width < 721){
      mobile_hide();
      nav.removeAttr('style');
    } else{
      $('.megamenu > li > div').removeAttr('style');
    }
  });

  $('.btn_nav').on('click', function(){
    var width = $(window).width();

    if(width < 721){
      mobile_show();
    } else{
      nav.slideDown();
    }
  });

  $('.total_nav .close, .dim').on('click', function(){
    var width = $(window).width();

    if(width < 721){
      mobile_hide();
      nav.animate({
        right:-100 + '%'
      }, 400);
    } else{
      nav.slideUp();
    }
  });

  $('.megamenu > li > a').on('click', function(){
    var width = $(window).width();

    if(width < 721){
      $(this).next().slideToggle();
      $(this).parent().toggleClass('on');
      $(this).parent().siblings().removeClass('on');
      $(this).parent().siblings().children('div').slideUp();
      return false;
    }
  });

  function mobile_show(){
    nav.addClass('on');
    nav.animate({
      right:0
    });
    $('.dim').fadeIn();
    $('body').addClass('hidden');
  }

  function mobile_hide(){
    setTimeout(function(){
      nav.removeClass('on');
    }, 400);
    $('.dim').fadeOut();
    $('body').removeClass('hidden');
  }

});
