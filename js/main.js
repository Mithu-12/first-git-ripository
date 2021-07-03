$(Document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 15,
        loop: true,
        items: 3,
        autoplay: true,
        autoplayTimeout: 3000,
    });
    new WOW().init();
})