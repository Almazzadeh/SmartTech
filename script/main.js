$(function () {

    // THE FADE EFFECT OF BASKET ON HEADER
    $("header .basket").on("mouseover", function () {
        $(".basketInside").fadeIn();
    })

    $("header .basket").on("mouseleave", function () {
        $(".basketInside").fadeOut();
    })

    // CLICK OUR CATEGORIES BUTTON
    $(".ourcategories").on("click", function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    })

    // SLIDE EFFECT OF SUBMENU ON OUR CATEGORIES
    $(".ourcategoriesDropdown .submenuParent").on("mouseover", function (e) {
        e.preventDefault();
        $(this).find(".submenu").slideDown();
    })

    $(".ourcategoriesDropdown .submenuParent").on("mouseleave", function (e) {
        e.preventDefault();
        $(this).find(".submenu").slideUp();
    })

    // SLIDE EFFECT OF DROPDOWN MENU
    $(".navbar .dropdown").on("mouseover", function () {
        $(this).find(".dropdown-menu").delay(100).slideDown();
    })

    $(".navbar .dropdown").on("mouseleave", function () {
        $(this).find(".dropdown-menu").slideUp();
    })

    // CAROUSEL
    $("#sec1 .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000
    });

    // HEIGHT OF CAROUSEL SIDE DIVS
    if ($(window).width() >= 992) {
        var carouselHeight = $("#sec1 .owl-carousel").height();

        $("#sec1 .carouselSide .col-lg-12").height((carouselHeight / 2));
    }

    // ****PRODUCT****

    $(".product").each(function () {
        var product = $(this);
        // NEW PRICE BY DISCOUNT
        if (product.find(".discount").length !== 0) {
            var discount = product.find(".discount").text().substring(1, 3);
            var oldprice = product.find(".productPrice").text().substring(1);

            product.find(".priceHolder").append("<h6 class=\"oldPrice\">$" + oldprice + "</h6>");

            var newprice = (oldprice * (100 - discount)) / 100;
            product.find(".productPrice").html("$" + newprice);
        }

        var productImageWidth = product.find("img").width();
        console.log(productImageWidth);
        
    })
    //CREATE STAR RATING
    for (let index = 0; index < 5; index++) {
        $(".starRating").append("<i class=\"fas fa-star\"></i>")
    }

    FillRating();

    $(".starRating i").on({
        click: function () {
            var currentStarIndex = $(this).index() + 1;
            $(this).parent().data("current", currentStarIndex);
            FillRating();
        },

        mouseover: function () {
            $(this).css("color", "orange").prevAll().css("color", "orange");
            $(this).nextAll().css("color", "")
        },

        mouseleave: function () {
            FillRating();
        }
    })

    // FILL PRODUCT RATING DIV FUNCTION
    function FillRating() {
        $(".starRating").each(function () {
            var currentPoint = Math.min(5, $(this).data("current"))
            var currentChild = $(this).children().eq(currentPoint - 1);
            currentChild.css("color", "orange").prevAll().css("color", "orange");
            currentChild.nextAll().css("color", "")
        })
    }

    $("#sec3 .owl-carousel").owlCarousel({
        // items: 5,
        loop: true,
        // autoplay: true,
        nav: true,
        navText: ["<i class=\"fas fa-chevron-left\"></i>", "<i class=\"fas fa-chevron-right\"></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });
})