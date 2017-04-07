// - -.
$(function(){
  $(".title").addClass("the-animation");
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

//动画 超级无敌长的js
$(window).scroll(function () {
  // 给大标题加动画
  var clearNav = $(".nav-wz");
  var theTitle = $(".wrap-out-wz h1");
  var winTop = $(window).scrollTop();
  console.log(winTop);

  if (winTop > 70) {
    clearNav.addClass("nav-color");

  }
  else {
    clearNav.removeClass("nav-color");
  }
  if (winTop  > 200) {
    theTitle.css({
      "opacity" : "1"
  });
  }
})


// meanbody 的 js
$(function () {
    var html = $(".left li:eq(0)");
    var css = $(".left li:eq(1)");
    var js = $(".left li:eq(2)");
    var htmlBox = $(".right:eq(0)");
    var cssBox = $(".right:eq(1)");
    var jsBox = $(".right:eq(2)");
    cssBox.hide();
    jsBox.hide();
    css.click(function () {
      htmlBox.hide();
      jsBox.hide();
      cssBox.fadeIn(800);
    })
    html.click(function () {
      cssBox.hide();
      jsBox.hide();
      htmlBox.fadeIn(1200);
    })
    js.click(function () {
      cssBox.hide();
      htmlBox.hide();
      jsBox.fadeIn(800);
    })
})

var addAnimation = $()
