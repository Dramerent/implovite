console.log('1')

const swiper1 = new Swiper('.swiper1', {
  
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  cubeEffect: {
    shadow: false,
    slideShadows: false,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'fraction',
  },
    
  });

  var products__slider = new Swiper(".products__slider", {
    spaceBetween: 10,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    watchOverflow:true,
    breakpoints: {
      1280: {
        slidesPerView: 4,
        
     
      },
      360:{
        slidesPerView: "auto",
        pagination: {
          el: "none",
        },
      }
     
      
     
    
    }
   
    
  });
  var slider3 = new Swiper(".slider3", {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    navigation: {
     
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    freeMode: true,
    
    freeModeMomentum: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    allowTouchMove:false,
    
  });
  var slider4 = new Swiper(".swiper4", {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    navigation: {
     
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    freeMode: true,
    
    freeModeMomentum: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    allowTouchMove:false,
    
  });
  var OtziviSlider = new Swiper(".Otzivi-slider", {
    slidesPerView: 'auto',
      spaceBetween: 70,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
      breakpoints: {
        1280:{
          spaceBetween: 70
        },
        980:{
          spaceBetween: 40
        }

      }
    
  });



