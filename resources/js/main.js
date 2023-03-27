$(document).ready(() => {
    var doctors_slider = document.getElementById('doctors_slider');
    var docs_slider = document.getElementById('docs_slider');
    var license_slider = document.getElementById('license_slider');
    var feedback_slider = document.getElementById('feedback_slider');

    $('.spoiler-body').css({'display': 'none'});
    $('.spoiler-zagolovok').click(function () {
        $(this).next('.spoiler-body').slideToggle(500)
    });

    $(doctors_slider).slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    })

    $(docs_slider).slick({
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ],
    })

    $(license_slider).slick({
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ],
    })

    $(feedback_slider).slick({
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true,
                    centerPadding: '40px',
                }
            },
        ],
    })
})
