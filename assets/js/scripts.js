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



  //https://github.com/maxwellito/vivus#vivusjs
    
  let caminho = "assets/svg/";
    graf_hm01 = new Vivus('graf-hm01', { 
      type: 'delayed',
      duration: 130, 
      file: caminho + '00_grafismo_topo_mobile.svg' 
    }),
    graf_hm02 = new Vivus('graf-hm02', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '002_grafismo_erp_mobile.svg'
    }),
    graf_hm03 = new Vivus('graf-hm03', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '003_grafismo_proheus_mobile.svg'
    }),   
    graf_hm04 = new Vivus('graf-hm04', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '004_grafismo_bi_mobile.svg'
    }),
    graf_hm05 = new Vivus('graf-hm05', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '005_grafismo_outsourcing_mobile.svg'
    }),
    graf_hm06 = new Vivus('graf-hm06', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '006_grafismo_mobile_mobile.svg'
    }),
    graf_hm07 = new Vivus('graf-hm07', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '007_grafismo_itegracaoes_mobile.svg'
    }),
    graf_hm08 = new Vivus('graf-hm08', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '008_grafismo_clientes_mobile.svg'
    });      

    //

    
    // obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
		// 		obt2 = new Vivus('obturateur2', {type: 'sync', duration: 150}),
		// 		obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 150}),
		// 		pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 20, forceRender: false});

})(jQuery);
