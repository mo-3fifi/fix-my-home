var swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 6,
    spaceBetween: 10,
    centeredSlides: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        // when window width is <= 480px
        600: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        // when window width is <= 640px
        920: {
            slidesPerView: 4,
            spaceBetween: 5
        }
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
