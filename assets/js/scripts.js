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
    
  // determina caminho absoluto dos arquivos svg  
  let caminho = "assets/svg/";
    
    // animacoes mobile
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
    }),
    // animacoes svg desktop
    graf_hd01 = new Vivus('graf-hd01', {
      type: 'delayed', 
      duration: 120, 
      file: caminho + '000_grafismo_topo.svg'
    }),       
    graf_hd02 = new Vivus('graf-hd02', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '002_grafismo_erp.svg'
    }), 
    graf_hd03 = new Vivus('graf-hd03', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '003_grafismo_proheus.svg'
    }),
    graf_hd04 = new Vivus('graf-hd04', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '004_grafismo_bi.svg'
    }),
    graf_hd05 = new Vivus('graf-hd05', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '005_grafismo_outsourcing.svg'
    }),
    graf_hd06 = new Vivus('graf-hd06', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '006_grafismo_mobile.svg'
    }),
    graf_hd07 = new Vivus('graf-hd07', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '007_grafismo_itegracaoes.svg'
    }),
    graf_hd08 = new Vivus('graf-hd08', {
      type: 'delayed', 
      duration: 100, 
      file: caminho + '008_grafismo_clientes.svg'
    });                            
    //

  

})(jQuery);
