// Navbar S tarted

$("#menu-button").on("click", () => {
  $(".list, .close").toggleClass("hidden");
  $(".menu-list").toggleClass("hidden");
});

// Navbar End

$(".cart-add-btn").click(function () {
  $(this).css({ display: "none" });
  $(this)
    .parent()
    .parent()
    .find(".counter-btn")
    .css({ display: "flex", "justify-content": "space-between" });
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
var swiper1 = new Swiper(".teamMember", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".teamMemberPage",
    clickable: true,
  },
  autoplay: {
    delay: 500, // time between slide changes in milliseconds
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


// Quantity started 
var incrementPlus;
var incrementMinus;

var buttonPlus  = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function() {
	var $n = $(this)
		.parent(".button-container")
		.parent(".container-quantity")
		.find(".qty");
	$n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
		var $n = $(this)
		.parent(".button-container")
		.parent(".container-quantity")
		.find(".qty");
	var amount = Number($n.val());
	if (amount > 0) {
		$n.val(amount-1);
	}
});
// Quantity end 


$(document).ready(function() {

  // ------------ Counter BEGIN ------------ 
  $(".counter__increment, .counter__decrement").click(function(e)
  {
    var $this = $(this);
    var $counter__input = $(this).parent().find(".counter__input");
    var $currentVal = parseInt($(this).parent().find(".counter__input").val());

    //Increment
    if ($currentVal != NaN && $this.hasClass('counter__increment'))
    {
      $counter__input.val($currentVal + 1);
    }
    //Decrement
    else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
    {
      if ($currentVal >= 1) {
        $counter__input.val($currentVal - 1);
      }
    }
  });
  // ------------ Counter END ------------ 

});
