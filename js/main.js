$(document).ready(function () {
  $(".main_slider").slick({
    speed: 1200,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./img/prew.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./img/next.png"></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $("ul.decision_tabs").on(
    "click",
    "li:not(.decision_tab_active)",
    function () {
      $(this)
        .addClass("decision_tab_active")
        .siblings()
        .removeClass("decision_tab_active")
        .closest("div.conteiner_tabs")
        .find("div.decision_contents")
        .removeClass("decision_contents_active")
        .eq($(this).index())
        .addClass("decision_contents_active");
    }
  );
  // $(".carusel").slick({
  //   speed: 1200,
  //   prevArrow:
  //     '<button type="button" class="slick-prev"><img src="./img/carusel_prew.png"></button>',
  //   nextArrow:
  //     '<button type="button" class="slick-next"><img src="./img/carusel_next.png"></button>',
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         arrows: false,
  //         dots: true,
  //       },
  //     },
  //   ],
  // });
});
