console.log("It work!");

$(".burger").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
});
$(".close").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
});

$(document).ready(function () {
  $(".scrollto").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated), body:not(:animated)").animate(
      { scrollTop: destination },
      1500
    );
    return false;
  });
});

$(document).ready(function () {
  $(".slider-wrap").slick({
    arrows: false,
    dots: true,
  });
});

$(document).ready(function () {
  $(".achiv-slider-wrap").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(".popupBtn").click(function (event) {
  $(".popup-wrapper").addClass("active");
  const target = $(this).data("target");
  $(target).addClass("active");
});

$(".popup-wrapper, .popup-window .window-close").click(function () {
  $(".popup-wrapper").removeClass("active");
  $(".popup-window").removeClass("active");
});
