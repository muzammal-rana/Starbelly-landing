$(".product-images").slick({
  arrows: false,
  infinite: true,
  speed: 300,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// products cards slick slider

$(".img-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});

$(".add").click(function () {
  if ($(this).prev().val()) {
    $(this)
      .prev()
      .val(+$(this).prev().val() + 1);
  }
});
$(".sub").click(function () {
  if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1)
      $(this)
        .next()
        .val(+$(this).next().val() - 1);
  }
});

// quantity button js code end

// review section slider link start
$(".review-container").slick({
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  dots: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: "900",
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: "768",
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: "480",
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
});
// review section slider link end

// product image popup section started here

// product image popup section ended here

// menu open cloase
function openMenu() {
  document.getElementById("cartMenu").style.right = "0";
}

function closeMenu() {
  document.getElementById("cartMenu").style.right = "-50%";
}

// menu open cloase

// img pop up modal javascript code
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
// img pop up modal javascript code end

$body = $("body");

$(document).on({
  ajaxStart: function () {
    $body.addClass("loading");
  },
  ajaxStop: function () {
    $body.removeClass("loading");
  },
});
