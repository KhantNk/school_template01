<<<<<<< HEAD
$(function (){
    $('.multiple-items').slick({
        slidesToShow: 4,
        slidesToScroll: 4
=======
$(document).ready(function () {
    $('.my-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
>>>>>>> 0c4dcf9 (New commit message.)
    });
});
