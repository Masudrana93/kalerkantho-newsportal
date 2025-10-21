
/*========================================================
      For Section-1 == Right side Slider js Start
===========================================================*/
var swiper = new Swiper(".mySwiperSingleSlide", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".right-slider-btn-next",
        prevEl: ".right-slider-btn-prev",
      },

     autoplay: {
        delay: 3200,
        disableOnInteraction: false
      },

    });




/*========================================================
      For Section-4 ==  Slider js Start
===========================================================*/
var swiper = new Swiper(".mySwiperShopByCat", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      
    },

     autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

    });


    /*========================================================
      For Section-5 ==  Slider-2 js Start
===========================================================*/
var swiper = new Swiper(".mySwiperSlider2", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".card-slider-btn-next",
        prevEl: ".card-slider-btn-prev",
      },
      breakpoints: {
      0: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      
    },

     autoplay: {
        delay: 2800,
        disableOnInteraction: false
      },

    });


