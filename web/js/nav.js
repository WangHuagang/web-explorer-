// 手机端下拉菜单

$(function () {
  $(".icon").bind("click", function () {
    if ($(".nav-container").is(":visible")) {
      $(".nav-container").hide(600);
      $(".icon").removeClass('the-icon');
    }  else {
      $(".nav-container").show(600);
      $(".icon").addClass('the-icon');
    }
  })
});



$(function () {
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    var theNav = $(".nav-wz");
    if (winTop >= 50) {
      theNav.removeClass("nav-color the")
    } else {
      theNav.addClass("nav-color")
    }
  });
});
