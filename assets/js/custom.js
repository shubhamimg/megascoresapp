 $('.testimonial-slider').owlCarousel({
        responsiveClass:true,
        margin:20,
        dots: false,
        autoWidth:false,
        nav: true,
        autoplay:true,
        navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
        autoplayTimeout: 3000,
        autoplayStopOnLast: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1200:{
                items:3
            }

        }

    });


  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  })

  $(document).ready(function () {
    $('.menu-bar a').on('click', function () {
      $('.header_nav').toggleClass('show-menu');
      $('body').toggleClass('open-menu');
    })
    $('.header_nav li a').on('click', function () {
      $('.header_nav').removeClass('show-menu');
      $('body').removeClass('open-menu');
    })
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".header").addClass("Header_fix");
    } else {
      $(".header").removeClass("Header_fix");
    }
  });