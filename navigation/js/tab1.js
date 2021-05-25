$(document).ready(function(){
  var tab = $('.tab li');

  tab.on('click', function(){
    var idx = $(this).index();
    var tab_con = $(this).parents('.tab_group').children('.tab_content').eq(idx);

    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    tab_con.addClass('on');
    tab_con.siblings('.tab_content').removeClass('on');
  });
});
