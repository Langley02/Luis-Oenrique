$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['', ''],

        responsive: {
            0: {
                items: 1,
                margin: 30,
            },

            769: {
                items: 2,
                margin: 30,
            }
        }
    });

    $("a.nav-link").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});