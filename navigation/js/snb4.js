$(document).ready(function(){
  $('.location button').on('click', function(){
    $(this).toggleClass('on');
    $(this).next('ul').stop().slideToggle();
    $(this).parent('li').siblings('li').children('button').removeClass('on');
    $(this).parent('li').siblings('li').children('ul').slideUp();
  });
});
