$(document).ready(function(){
  var snb = $('.snb ul').prev('a');
  var snb_nav = $('.snb li');

  snb.addClass('dep');
  snb_nav.each(function(){
      if($(this).hasClass('on')){
        $(this).children('ul').show();
      }
  });

  snb.on('click', function(){
      $(this).parent().addClass('on').children('ul').stop().slideDown(400);
      $(this).parent().siblings('li').removeClass('on').children('ul').stop().slideUp(200);
      return false;
  });
});
