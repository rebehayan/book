$(document).ready(function(){

  var select_attr = $('header nav a, header nav button');

  $(window).on('resize load', function(){
    var width = $(window).width();
    if (width < 721){
      attrs();
    } else{
      removeAttrs();
      $('.dim').fadeOut();
      $('header nav').removeClass('on');
    }
  });

  $('.btn_nav').on('click', function(){
    var width = $(window).width();
    if (width < 721){
      $('header nav').addClass('on');
      $('header nav a:first').focus();
      $('.dim').fadeIn();
      removeAttrs();
    }
  });

  $('header .close').on('click', function(){
    $(this).parent().removeClass('on');
    $('.dim').fadeOut();
    attrs();
  });

  function attrs(){
    select_attr.attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    });
  }

  function removeAttrs(){
    select_attr.removeAttr('aria-hidden').removeAttr('tabindex');
  }

});
