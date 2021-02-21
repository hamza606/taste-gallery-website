if($("#main-slider").length){
    var swiper = new Swiper('#main-slider', {
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 30,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            520: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,

            },
        },
        navigation: {
            nextEl: "#main-slider .main-swiper-controls .swiper-button-next",
            prevEl: "#main-slider .main-swiper-controls .swiper-button-prev",
        },
    });
}
if($("#seller-slider").length){
    var swiper = new Swiper('#seller-slider', {
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 30,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            520: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,

            },
        },
        navigation: {
            nextEl: "#seller-slider .main-swiper-controls .swiper-button-next",
            prevEl: "#seller-slider .main-swiper-controls .swiper-button-prev",
        },
    });
}
if($("#recipe-desc-slider").length){
    var swiper = new Swiper('#recipe-desc-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        navigation: {
            nextEl: "#recipe-desc-slider .main-swiper-controls .swiper-button-next",
            prevEl: "#recipe-desc-slider .main-swiper-controls .swiper-button-prev",
        },
    });
}
