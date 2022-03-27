// Card Text slide
var swiperObj = [];
var swiperPos = [];
const El = document.querySelectorAll(".text-slide-container");
if (El.length) {
  for (var i = 0; i < El.length; i++) {
    El[i].parentElement.classList.add(`text-slide-wrapper-${i}`);

    swiperPos[i] = 0;
    swiperObj[i] = new Swiper(`.text-slide-wrapper-${i} .text-slide-container`, {
      loop: false,
      grabCursor: false,
      resistanceRatio: 0.5,
      scrollbar: {
        el: `.text-slide-wrapper-${i} .slide-scrollbar`,
        hide: false,
      },
      // observer:true,
      // observeParents: true,
      on: {
        slideChange: function (e) {
          if (this.isBeginning) {
            this.$el[0].parentElement.classList.add("disable-scrollbar");
          } else {
            this.$el[0].parentElement.classList.remove("disable-scrollbar");
          }
          obj = $(e.$wrapperEl).parent().parent();
          var classList = obj.attr("class").split(/\s+/);
          idx = 0;
          classList.forEach((c) => {
            if (c.indexOf("text-slide-wrapper-") > -1) {
              idx = c.replace("text-slide-wrapper-", "");
            }
          });
          swiperPos[idx] = e.activeIndex;
        },
      },
    });
  }
}

function InitStoresSlide() {
  const delay = 5000;
  var StoresSlide = new Swiper(".stories-slide-container", {
    loop: true,
    speed: 600,
    disableOnInteraction: true,
    autoplay: {
      delay: delay,
    },
    pagination: {
      el: ".stories-slide-wrapper .pagination",
      clickable: false,
      type: "bullets",
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><span class="timer" style="--delay:' + delay + 'ms"></span></span>';
      },
    },
    on: {
      slideChange: function () {
        $(".stories-slide-wrapper .pagination .swiper-pagination-bullet").removeClass("start-progress");
        $(".stories-slide-wrapper .pagination .swiper-pagination-bullet-active").prevAll(".swiper-pagination-bullet").addClass("completed");
        $(".stories-slide-wrapper .pagination .swiper-pagination-bullet-active").nextAll(".swiper-pagination-bullet").removeClass("completed");
        $(".stories-slide-wrapper .pagination .swiper-pagination-bullet-active").removeClass("completed");
        setTimeout(function () {
          $(".stories-slide-wrapper .pagination .swiper-pagination-bullet-active").addClass("start-progress");
        }, 70);
      },
      init: function () {
        setTimeout(function () {
          $(".stories-slide-wrapper .pagination .swiper-pagination-bullet-active").addClass("start-progress");
        }, 70);
      },
      touchEnd: function (swiper, event) {
        setTimeout(() => {
          swiper.autoplay.start();
        }, 100);
      },
    },
  });
}
InitStoresSlide();

function reLoadSwiper() {
  setTimeout(() => {
    for (var i = 0; i < El.length; i++) {
      w = swiperObj[i].size;
      c = $(".text-slide-wrapper-" + i + " .swiper-wrapper .swiper-slide").length;
      dragObj = $(".text-slide-wrapper-" + i + " .swiper-scrollbar-drag");
      dragObj.css("width", w / c + "px");
      dragObj.css("transform", "translate3d(" + (w / c) * swiperPos[i] + "px, 0px, 0px)");
    }
  }, 1000);
}

function DetailsPageSlide() {
  // Media slide scripts start
  var mySwiper = new Swiper(".media-slide-container", {
    loop: false,
    resistanceRatio: 0.5,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 4,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  });

  /* Go to the slide that include images */
  $(".badge-photos").click(function (e) {
    e.preventDefault();
    mySwiper.slideTo(0);
  });
  /* Go to the slide that include videos */
  $(".badge-videos").click(function (e) {
    e.preventDefault();
    var Videos = $(".an-image").length;
    console.log(Videos);
    mySwiper.slideTo(Videos);
  });
  /* Go to the slide that include video tour */
  $(".badge-tour").click(function (e) {
    e.preventDefault();
    var Tour = $(".a-slide").length;
    mySwiper.slideTo(Tour);
  });

  // Media slide scripts start
  new Swiper(".floor-card-slide .swiper-container", {
    loop: false,
    resistanceRatio: 0.5,
    navigation: {
      nextEl: ".floor-card-slide .next-btn-wrap",
      prevEl: ".floor-card-slide .prev-btn-wrap",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });

  var sliderSwiper = new Swiper(".dev-profile-slide-wrap .swiper-container", {
    loop: false,
    resistanceRatio: 0.5,
    autoHeight: true,
    setWrapperSize: true,
    navigation: {
      nextEl: ".dev-profile-slide-wrap .light_next_btn",
      prevEl: ".dev-profile-slide-wrap .light_prev_btn",
    },
  });

  $(".more-").click(function () {
    $(this).parent().siblings(".paras-").addClass("more");
    $(this).text(" ");
    $(this).parent("p").siblings(".paras-").children().children(".less-").text("Read Less");
    sliderSwiper.updateAutoHeight(1);
  });

  $(".less-").click(function () {
    $(this).parent().parent().removeClass("more");
    $(this).text(" ");
    $(this).parent().parent().siblings("p").children(".more-").text("Read More");
    sliderSwiper.updateAutoHeight(1);
  });
}
DetailsPageSlide();

(function ($) {
  $(".content-tab-header .link-item").each(function () {
    $(this)
      .closest(".swiper-slide")
      .css("width", $(this).innerWidth() + "px");
  });

  var headSwiper = new Swiper(".content-tab-header .swiper-container", {
    loop: false,

    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 0,
    mode: "horizontal",
    freeMode: true,
    navigation: {
      nextEl: ".content-tab-header .next-btn-wrap",
      prevEl: ".content-tab-header .prev-btn-wrap",
    },
  });

  function TabHeaderScroll(TopOffset) {
    var $tabHeaderLinks = $('.content-tab-header .link-item[href*="#"]:not([href="#"]');

    $tabHeaderLinks.on("click", function (event) {
      event.preventDefault();
      var $section = $($(this).attr("href"));
      if ($section.length) {
        if ($section) {
          $("html, body").animate(
            {
              scrollTop: $section.offset().top - TopOffset,
            },
            50
          );
        }
      }
    });

    $(window).on("scroll", function () {
      $tabHeaderLinks.each(function () {
        var $section = $(this).attr("href");
        if ($($section).length) {
          var $sectionOffset = $($section).offset().top;
          var $sectionHeight = $($section).outerHeight();
          var $sectionBottom = $sectionOffset + $sectionHeight;
          var $scrollPosition = $(document).scrollTop();

          if ($scrollPosition < $sectionBottom - (TopOffset - 10) && $scrollPosition >= $sectionOffset - (TopOffset + 4)) {
            $(this).addClass("active");
            $(this).parent().addClass("active");
            var index = $(".-slide--.active").index();
            headSwiper.slideTo(index - 1);
          } else {
            $(this).removeClass("active");
            $(this).parent().removeClass("active");
          }
        }
      });
    });
  }
  TabHeaderScroll(70);
})(jQuery);

// Card Text slide End
(function ($) {
  var timer;
  $(window).resize(function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      reLoadSwiper();
    }, 300);
  });

  // HEADER SCRIPTS START
  $("body").append('<div class="body-backdrop">');

  $(".toggle-sidenav").on("click", function () {
    $(".side-menu-wrapper").toggleClass("open");
    $(".body-backdrop").toggleClass("open");
    $("body").toggleClass("overflow-hidden");
    $(".child-nav-wrapper").removeClass("open");
  });

  $(".side-navbar-nav li .child-nav-wrapper").prev("a").addClass("has-child");

  $(".side-navbar-nav li a.has-child").on("click", function (event) {
    event.preventDefault();
    $(this).next(".child-nav-wrapper").addClass("open");
  });

  $(".side-navbar-nav li .btn-back-icon").on("click", function () {
    $(this).closest(".child-nav-wrapper").removeClass("open");
  });

  $(".body-backdrop").on("click", function () {
    if ($(".side-menu-wrapper").hasClass("open")) {
      $(".side-menu-wrapper").removeClass("open");
      $(".body-backdrop").removeClass("open");
      $("body").removeClass("overflow-hidden");
      $(".child-nav-wrapper").removeClass("open");
    }
    $(".body-backdrop").removeClass("open");
    $("body").removeClass("overflow-hidden");
    $(".all-filters-area").removeClass("open");

    $(".sort-fixd-wrap").removeClass("open");
    $("body").css("overflow", "auto");
  });
  // HEADER SCRIPTS END

  // Filter scrips
  $(".filter-content-item .title").on("click", function (e) {
    if ($(e.target).is(".filter-close")) {
      window.location.assign("#");
    } else if ($(e.target).is("span")) {
      e.stopPropagation();
    } else {
      var ThisItem = $(this).closest(".filter-content-item").find(".filter-body");

      ThisItem.slideToggle(250, function () {
        if (ThisItem.find(".check-box-lists").hasClass("box-nc-scroll")) {
          $(".box-nc-scroll").getNiceScroll().resize();
        }

        $(this).closest(".filter-content-item").toggleClass("has-opened");
      });
      $(this).closest(".filter-content-item").find(".toggle-with-parent").slideToggle(250);

      // stoping click on
      $(".chip").click(function (e) {
        e.stopPropagation();
      });
    }
  });

  $(".chip .btn-times").click(function (e) {
    e.preventDefault();
    window.location.assign("#");
  });

  $(".check-box-lists li .check-box-lists").parent("li").append('<button class="plus-toggle">');

  $(".check-box-lists li .plus-toggle").on("click", function () {
    $(this)
      .parent("li")
      .find(".check-box-lists")
      .slideToggle(250, function () {
        $(".box-nc-scroll").getNiceScroll().resize();
      });

    $(this).toggleClass("opened");
  });

  $(".open-filter-area").on("click", function (event) {
    event.preventDefault();
    $(".all-filters-area").addClass("open");
    $(".body-backdrop").addClass("open");
    $("body").css("overflow", "hidden");

    setTimeout(function () {
      $(".all-filters-wrap").scrollTop(0);
    }, 0);
  });

  $(".filter-area-header .btn-back-icon").on("click", function (event) {
    event.preventDefault();
    $("body").css("overflow", "auto");
    $(".all-filters-area").removeClass("open");
    $(".body-backdrop").removeClass("open");
  });

  $(".open-sort-area").on("click", function (event) {
    event.preventDefault();
    $(".sort-fixd-wrap").addClass("open");
    $(".body-backdrop").addClass("open");
    $("body").css("overflow", "hidden");
  });

  $(".sort-fixd-wrap .btn-back-icon").on("click", function (event) {
    event.preventDefault();
    $("body").css("overflow", "auto");
    $(".sort-fixd-wrap").removeClass("open");
    $(".body-backdrop").removeClass("open");
  });

  // Inputs scripts
  $(".has-nc-select").niceSelect();
  $(".has-nc-select").each(function () {
    var placeholder = $(this).attr("placeholder");
    var prefix = $(this).attr("prefix");
    if (placeholder != "") {
      $(this).next(".nice-select").find(".current").text(placeholder);
    }
    if (prefix != "") {
      $(this).next(".nice-select").find(".current").attr("prefix", prefix);
    }
  });

  var SelectTabArr = [];

  $(".has-tab-link select option").each(function (index, el) {
    var id = $(this).attr("data-id");
    var List = $(this).closest(".has-tab-link").find(".list li");
    SelectTabArr.push(id);
  });

  $(".has-tab-link .list li").each(function (index, el) {
    $(this).attr("data-id", SelectTabArr[index]);
  });

  $(".has-tab-link .list li").click(function () {
    var tabArea = $(this).closest(".has-tab-link").attr("data-area");
    var target = $(this).attr("data-id");
    $(tabArea).find(".tab-item").removeClass("active");
    $(tabArea).find(target).addClass("active");
  });

  $(".input-style2 input").focus(function () {
    $(this).parent(".input-style2").addClass("focused");
  });
  $(".input-style2 input").blur(function () {
    checkInputsValue();
  });

  checkInputsValue();

  function checkInputsValue() {
    $(".input-style2 input").each(function () {
      if ($(this).val() != "") {
        $(this).parent(".input-style2").addClass("focused");
      } else {
        $(this).parent(".input-style2").removeClass("focused");
      }
    });
  }

  // FOOTER SCRIPTS
  $(".footer-accourdion-wrap .footer-title").click(function (j) {
    if ($(window).innerWidth() < 576) {
      console.log("Right");
      var dropDown = $(this).closest(".accourdion-item").find(".ac-body");

      $(this).closest(".footer-accourdion-wrap").find(".ac-body").not(dropDown).slideUp(250);

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".footer-accourdion-wrap").find(".footer-title.active").removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle(250);

      j.preventDefault();
    }
  });

  var width = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != width) {
      width = $(window).width();
      if ($(window).width() < 576) {
        $(".footer-accourdion-wrap").find(".ac-body").css("display", "none");
      } else {
        $(".footer-accourdion-wrap").find(".ac-body").css("display", "block");
      }
      if ($(".footer-accourdion-wrap .footer-title").hasClass("active")) {
        $(".footer-accourdion-wrap .footer-title").removeClass("active");
      }
    }
  });

  /*   $(window).on("resize", function (e) {
    if ($(window).innerWidth() > 576) {
      $(".footer-accourdion-wrap").find(".ac-body").css("display", "block");
      e.preventDefault();
    }
    if ($(".footer-accourdion-wrap .footer-title").hasClass("active")) {
      $(".footer-accourdion-wrap .footer-title").removeClass("active");
    }
  });

  $(window).on("resize", function (e) {
    if ($(window).innerWidth() < 576) {
      $(".footer-accourdion-wrap").find(".ac-body").css("display", "none");
      e.preventDefault();
    }
  }); */

  /*   var dwidth = $(window).width();

  $(window).resize(function () {
    var wwidth = $(window).width();
    if (wwidth < 576 || dwidth === wwidth) {
      $(".footer-accourdion-wrap").find(".ac-body").css("display", "none");
    } else if (dwidth !== wwidth && wwidth > 576) {
      $(".footer-accourdion-wrap").find(".ac-body").css("display", "block");
    }
  }); */

  // Tab Scripts
  $(".custom-tab-wrapper").each(function () {
    var __this = $(this);
    $(this)
      .find(".custom-tab-nav a")
      .on("click", function (event) {
        event.preventDefault();
        __this.find(".custom-tab-content .tab-item").removeClass("active");
        __this.find(".custom-tab-nav a").removeClass("active");

        var getID = $(this).attr("href");
        $(this).addClass("active");
        $(getID).addClass("active");
      });
  });

  $(".nav-tabs").each(function () {
    var slideIndicator = $(this).find(".tab-slide");
    var Position = $(this).children(".nav-item").position();
    var Width = $(this).children().width();
    var height = $(this).children().height();
    slideIndicator.css({ left: Position.left, top: Position.top, width: Width, height: height });

    let NavLink = $(this).find(".nav-item .nav-link");
    NavLink.click(function () {
      var Position = $(this).parent().position();
      var Width = $(this).parent().width();
      var height = $(this).parent().height();
      slideIndicator.css({ left: Position.left, top: Position.top, width: Width, height: height });
    });
  });

  $(window).on("resize", function () {
    $(".nav-tabs .nav-item .nav-link").each(function () {
      var Position = $(this).parent().position();
      var Width = $(this).parent().width();
      var height = $(this).parent().height();
      $(this).parent().parent().find(".tab-slide").css({ left: Position.left, top: Position.top, width: Width, height: height });
    });
  });

  $(".chip .btn-times").hover(
    function () {
      if (!$(this).parent(".chip").hasClass("chip-bg") && !$(this).parent(".chip").hasClass("chip-light")) {
        $(this).parent(".chip").addClass("hover-x");
      }
    },
    function () {
      $(this).parent(".chip").removeClass("hover-x");
    }
  );

  $("[data-get-num]").click(function (event) {
    event.preventDefault();
    var num = $(this).attr("data-get-num");
    $(this).text(num);
    $(this).addClass("btn-change-to-gray");
  });

  $("[data-expandedlist]").click(function (event) {
    event.preventDefault();
    var getEl = $(this).attr("data-expandedlist");
    var show = $(getEl).attr("data-each-show");
    $(getEl).find(".list-item:hidden").slice(0, show).removeClass("d-none");
    if ($(getEl).find(".list-item:last-child:hidden").length == 0) {
      $(this).addClass("d-none");
    }
  });

  $(".all-sort-fixd-wrap .option").on("click", function (event) {
    event.preventDefault();
    var getText = $(this).text();
    $("body").css("overflow", "auto");
    $(".sort-filter-show .current-text").text(getText);
    $(".sort-fixd-wrap").removeClass("open");
    $(".body-backdrop").removeClass("open");
    $(".all-sort-fixd-wrap .option").removeClass("selected focus");
    $(this).addClass("selected focus");
  });
})(jQuery);

/* Check Parent box when all child select */
var numberOfChildCheckBoxes = $(".cb-1").length;

$(".cb-1").change(function () {
  var checkedChildCheckBox = $(".cb-1:checked").length;
  if (checkedChildCheckBox == numberOfChildCheckBoxes) {
    $("#checkAllFirst").prop("checked", true);
    $("#checkAllFirst").removeClass("less");
  } else $("#checkAllFirst").prop("checked", false);
  $("#checkAllFirst").addClass("less");
  if (checkedChildCheckBox <= 0) {
    $("#checkAllFirst").removeClass("less");
  }
});

$("#checkAllFirst").change(function () {
  var checkedChildCheckBox = $("#checkAllFirst:checked").length;
  if (checkedChildCheckBox > 0) {
    $(".cb-1").prop("checked", true);
  } else $(".cb-1").prop("checked", false);
});

/* Check Parent box when all child select */
var numberOfChildCheckBoxes2 = $(".cb-2").length;

$(".cb-2").change(function () {
  var checkedChildCheckBox2 = $(".cb-2:checked").length;
  if (checkedChildCheckBox2 == numberOfChildCheckBoxes2) {
    $("#checkAllSecond").prop("checked", true);
    $("#checkAllSecond").removeClass("less");
  } else {
    $("#checkAllSecond").prop("checked", false);
    $("#checkAllSecond").addClass("less");
    if (checkedChildCheckBox2 <= 0) {
      $("#checkAllSecond").removeClass("less");
    }
  }
});

$("#checkAllSecond").change(function () {
  var checkedChildCheckBox2 = $("#checkAllSecond:checked").length;
  if (checkedChildCheckBox2 > 0) {
    $(".cb-2").prop("checked", true);
  } else $(".cb-2").prop("checked", false);
});

// Min value cannot be greater then max

$(document).ready(function () {
  $("#min-bedroom").on("input", function () {
    var min = document.getElementById("min-bedroom").value;
    var max = document.getElementById("max-bedroom").value;
    console.log(min);
    console.log(max);
    if (min > max) {
      $(".bedroom").addClass("error");
      $(".error-message").html("Min. bedroom can't more then max. bedroom");
    } else {
      $(".bedroom").removeClass("error");
      $(".error-message").html("");
    }
  });
});

$(document).ready(function () {
  $("#max-bedroom").on("input", function () {
    var min = document.getElementById("min-bedroom").value;
    var max = document.getElementById("max-bedroom").value;
    console.log(min);
    console.log(max);
    if (min > max) {
      $(".bedroom").addClass("error");
      $(".error-message").html("Min. bedroom can't more then max. bedroom");
    } else {
      $(".bedroom").removeClass("error");
      $(".error-message").html("");
    }
  });
});

(function ($) {
  $(".custom-horizontal-chart-wrapper .horizontal-line-wrap .horizontal-line").each(function () {
    var getPercent = $(this).attr("data-percent");
    var getColor = $(this).attr("data-color");
    $(this).css({
      width: getPercent,
      background: getColor,
    });
  });
})(jQuery);

/* SITE PLAN SWIPER */
new Swiper(".swipe-it", {
  loop: false,
  resistanceRatio: 0.5,
  freeMode: true,
  navigation: {
    nextEl: ".table-transparent .moveit-next",
    prevEl: ".table-transparent .moveit-back",
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 15,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 15,
    },
  },
});

/* LOCATION MAP SWIPER */
new Swiper(".swipe-itt", {
  loop: false,
  resistanceRatio: 0.5,
  freeMode: true,
  navigation: {
    nextEl: ".table-transparent .moveit-nextt",
    prevEl: ".table-transparent .moveit-backk",
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",

      spaceBetween: 15,
    },
    768: {
      slidesPerView: "auto",

      spaceBetween: 15,
    },
  },
});

/* Error validation, Detail Page, COntact Sales Section */
$(document).ready(function () {
  $(".input-style2 input").on("input", function () {
    console.log("warning" === $(this).val().trim());
    if ("warning" === $(this).val().trim()) {
      $(this).parents(".input-style2").addClass("error");
      $(this).siblings(".error-message").html("This is the error message.");
    } else {
      $(this).parents(".input-style2").removeClass("error");
      $(this).siblings(".error-message").html("");
    }
    if ($(this).val()) {
      $(this).parents(".input-style2").addClass("value");
    } else {
      $(this).parents(".input-style2").removeClass("value");
    }
  });
});
