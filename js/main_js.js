$(document).ready(function () {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        items: 1,
    })

    $("a.nav-link").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});