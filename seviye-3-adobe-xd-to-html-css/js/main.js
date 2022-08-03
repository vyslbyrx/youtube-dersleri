$(".has-sublist").hover(
    function() {
        $(this).find(".sublist-wrapper").slideDown(500)
    },
    function() {
        $(this).find(".sublist-wrapper").slideUp(500)
    }
)


/* Feature Slider */
const featureSlide = new Swiper('.feature-list', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    
  });

  const testimonialsSlide = new Swiper('#testimonials-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
      },
    
  });

  // Menu

  $(".header__mobile").click(function() {
    $(".header-right").toggleClass("active")
  })