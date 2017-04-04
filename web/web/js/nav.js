// 手机端下拉菜单
$(function(){
  $(".icon").bind("click", function() {
    if ($(".nav-container").is(":visible")) {
      $(".nav-container").hide(800);
      $(".icon").removeClass('the-icon');
    } else {
      $(".nav-container").show(800);
      $(".icon").addClass('the-icon');
    }
  })
})
