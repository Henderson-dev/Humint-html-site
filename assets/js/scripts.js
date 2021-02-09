(function ($) {


// pagina pre carregamento do site
//$(window).on('load', function() {
  //$("#loader").delay(900).fadeOut("slow");
  //$("#loader").delay(900).addClass("abre-tela");
  //$("#loader").delay(300).slideUp("slow");
//})

/*-----------------------------------------------------------------------------*/
/*  Rolagem suave de tela para os links de Ancora, ligados uma section com ID
/*-----------------------------------------------------------------------------*/
$('a[href*="#"]:not([href="#"])').on('click', function() {
  let target = $(this.hash);
  console.log(target.length);
  if (target.length) {
    $('html, body').animate({ scrollTop: target.offset().top }, 1000);
    $('.navbar-collapse').collapse('hide');
    return false;
  }
});

$(document).on("scroll", function () {
  let nav = $(".main-menu");
  let scroll = $(window).scrollTop();
  if (scroll >= 10) {
    nav.addClass("scrolled");
  } else {
    nav.removeClass("scrolled");
  }
});



/*-----------------------------------------------------------------------------*/
/*  Exibir e esconder grafico no menu mobile
/*-----------------------------------------------------------------------------*/
$('.hamburger').on('click', function() {
  $('.graphic-menu').show(400);
  if ($('.hamburger').attr('aria-expanded') === "true") {
    $('.graphic-menu').hide(10);
  }
});



// var swiper = new Swiper('.swiper-container', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },  
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },    
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },    
    1199: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  }  
});

// var mySwiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });



})(jQuery);
