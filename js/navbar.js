$("#option1").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$("#option2").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$("#option3").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$("#option4").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$("#option5").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

if ($(window).scrollTop() > 500 && $(window).width() < 1000) {
  $("footer").addClass("hdfooter");
} else {
  //remove the background property so it comes transparent again (defined in your css)
  $("footer").removeClass("hdfooter");
}

$(function () {
  $(window).on("scroll", function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100) {
      $("header").addClass("acti");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("header").removeClass("acti");
    }

    if (!($(window).scrollTop() > 500 && $(window).width() < 1000)) {
      $("footer").addClass("showfooter");
    }
    if ($(window).scrollTop() > 2411) {
      $("footer").addClass("showfooter");
    }
    if ($(window).scrollTop() < 2243) {
      $("footer").removeClass("showfooter");
    }

    if ($(window).scrollTop() < 3468 && $(window).width() < 1000) {
      $("footer").removeClass("showfooter");
    }
  });
});
