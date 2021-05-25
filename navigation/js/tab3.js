$(document).ready(function(){

  var tab = $('.tab_nav button');

  tab.on('click', function(){
    var depth2 = $(this).next();
    var idx = $(this).parent().index();

    $(this).parent().addClass('on');
    $(this).parent().siblings().removeClass('on');

    if(depth2.hasClass('tab_nav') || $(this).parent().parent().parent().hasClass('tab')){
      var $this = $(this).parents('.tab_group').children('.tab_content').eq(idx);

      $this.addClass('on').siblings().removeClass('on');
    } else{
      var parent_idx = $(this).parent().parent().parent('li').index();
      var $this = $(this).parents('.tab_group').children('.tab_content').eq(parent_idx).children().eq(idx);

      $this.addClass('on').siblings().removeClass('on');
    }
  });
});
