const swiper = new Swiper('.swiper', {
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false
    // },
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  }
  });