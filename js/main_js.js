$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        item: 1,
        navText: ['', ''],

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