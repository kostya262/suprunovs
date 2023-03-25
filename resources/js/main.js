$(document).ready(() => {
    var doctors_slider = document.getElementById('doctors_slider');
    var docs_slider = document.getElementById('docs_slider');
    var price_slider = document.getElementById('price_slider');
    var license_slider = document.getElementById('license_slider');
    var feedback_slider = document.getElementById('feedback_slider');

    $(doctors_slider).slick({
        slidesToShow: 4,
        adaptiveHeight: true,
    })

    $(docs_slider).slick({
        slidesToShow: 2,
        adaptiveHeight: true,
    })

    $(price_slider).slick({
        slidesToShow: 3,
        adaptiveHeight: true,
    })

    $(license_slider).slick({
        slidesToShow: 2,
        adaptiveHeight: true,
    })

    $(feedback_slider).slick({
        slidesToShow: 3,
        adaptiveHeight: true,
    })
})
