// Navbar S tarted 

$('#menu-button').on('click', () => {
  $('.list, .close').toggleClass('hidden');
  $('.menu-list').toggleClass('hidden')
})

// Navbar End


$(".cart-add-btn").click(function () {
  $(this).css({ display: "none" });
  $(this).parent().parent().find(".counter-btn").css({ display: "flex", "justify-content": "space-between" });
  $(this).parent().parent().find("input").val(1);
});

// input spinner
$(".add-btn").click(function () {
  let $current_val = parseInt($(this).siblings("input").val());

  let $update_val = $current_val + 1;
  $(this).siblings("input").val($update_val);
});

$(".remove-btn").click(function () {
  let $current_val = parseInt($(this).siblings("input").val());

  let $update_val = $current_val - 1;
  $(this).siblings("input").val($update_val);

  if ($update_val < 1) {
    $(this).parent().parent().find(".counter-btn").css({ display: "none" });
    $(this).parent().parent().find(".cart-add-btn").css({ display: "block" });
  }
});


// Swiper Js Started 
// Highest Selling Courses started
var swiper8 = new Swiper(".highestSelling", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".highestSellingPage",
    clickable: true,
  },
  autoplay: {
    delay: 5000, // time between slide changes in milliseconds
    disableOnInteraction: true, // enables or disables autoplay on user interaction (default: true)
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
// Highest Selling Courses started

// Swiper Js End 





  // courses details FAQ started

  $(".acc-container .acc:nth-child(1) .acc-head").addClass("active");
  $(".acc-container .acc:nth-child(1) .acc-content").slideDown();
  $(".acc-head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".acc-content").slideUp();
      $(this).removeClass("active");
    } else {
      $(".acc-content").slideUp();
      $(".acc-head").removeClass("active");
      $(this).siblings(".acc-content").slideToggle();
      $(this).toggleClass("active");
    }
  });

  // courses details FAQ end