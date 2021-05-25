$(document).ready(function(){
  var snb_nav = $('.snb > ul > li');

  snb_nav.on('mouseover focusin', function(){
    var y = $(this).offset().top;
    $(this).find('.sub > ul').css('top', y - 13);
    $(this).siblings('li').children('.sub').removeAttr('style');
    $(this).siblings('li').removeClass('on');
    $(this).addClass('on');
  });

  snb_nav.on('mouseleave', function(){
    $(this).removeClass('on');
  });
});
