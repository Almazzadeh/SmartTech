$(function () {
    new WOW().init();

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

    // ****PRODUCT****
    $(".product").each(function () {
        var product = $(this);
        var productImg = product.find("img")
        // NEW PRICE BY DISCOUNT
        if (product.find(".discount").length !== 0) {
            var discount = product.find(".discount").text().substring(1, 3);
            var oldprice = product.find(".productPrice").text().substring(1);

            product.find(".priceHolder").append("<h6 class=\"oldPrice\">$" + oldprice + "</h6>");

            var newprice = (oldprice * (100 - discount)) / 100;
            product.find(".productPrice").html("$" + newprice);
        }

        // var productImageWidth = productImg.width();
        // product.find("img").height(productImageWidth);
    })

    // ==================================

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
            $(this).css("color", "gold").prevAll().css("color", "gold");
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
            currentChild.css("color", "gold").prevAll().css("color", "gold");
            currentChild.nextAll().css("color", "")
        })
    }

    // SECTION 4 CONTENT HEIGHT
    $("#sec4 .bg").height($("#sec4 .product").outerHeight() - 2);

    //SECTION 5 (PRODUCT CATEGORY TABS)
    $("#sec5 .headers .col-6").on("click", function () {
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");

        $("#sec5 .contents").find(".fade.show").removeClass("show")
        var categoryName = $(this).find("h6").text();
        var contentDiv = $("#sec5 .contents").find(`[data-category='${categoryName}']`).addClass("show");
        console.log(contentDiv);

    });

    // ==================================

    $("#footer_sec4 .year").html((new Date()).getFullYear())

    // ==================================

    // MOVE PAGE UP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#gotop').css("opacity", "1")
        } else {
            $('#gotop').css("opacity", "0");
        }
    });

    // ==================================

    //Click event to scroll to top
    $('#gotop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // ==================================

    // ABOUT PAGE PROGRESS BARS
    $('.myprogress-bar .title').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 2500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) + "%");
                }
            });
    });

    $(".myprogress-bar").each(function () {
        var maxWidth = $(this).data("width");

        $(this).animate({
            width: maxWidth + "%"
        }, 2500)
    })

    // ==================================

    // RANGE SLIDER
    if ($(document).find("#range").length !== 0) {
        $("#range").ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 700,
            prefix: "$"
        });
    }

    // ==================================

    //SHOW-HIDE PRODUCT SIDEBAR
    $("#openSidebar").on("click", function () {
        $("#productSidebar").css("transform", "translateX(0)");
        $(".layout").fadeIn();
    })

    $("#closeSidebar, .layout").on("click", function () {
        $("#productSidebar").css("transform", "");
        $(".layout").fadeOut();
    })

    // ==================================

    // LIST PRODUCT PAGE
    $("#listProduct .product > div").each(function () {
        var productImageHeight = $("#listProduct img").height()
        $(this).css("height", productImageHeight + "px");
    })

    // ==================================

    // ******ALL OWL CAROUSEL SCRIPTS******
    // INDEX PAGE SECTION 1 CAROUSEL
    $("#sec1 .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2000
    });

    $("#sec5 .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
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

    $("#footer_sec1 .owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
            },
            768: {
                items: 3,
                autoplay: true,
            },
            992: {
                items: 5
            }
        }
    });

    // OWL CAROUSEL ON SECTION 3
    $("#sec3 .owl-carousel, #product3_sec2 .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
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

    // RELATED PRODUCT CAROUSEL
    $("#related_products .owl-carousel").owlCarousel({
        loop: true,
        // autoplay: true,
        nav: true,
        navText: ["<i class=\"fas fa-chevron-left\"></i>", "<i class=\"fas fa-chevron-right\"></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // ==================================

    // ****PRODUCT DETAILS****
    function changeProduct(mainID, productName, productPrice, imgSource) {
        $("#product-Details " + mainID).on("click", function (e) {
            e.preventDefault();
            $("#product-Details .productName").html(productName);
            $("#product-Details .price").html(productPrice);

            $("#product-Details img").fadeOut(200, function () {
                    $("#product-Details img").attr('src', "images/products/" + imgSource);
            }).fadeIn(200);
                
            $("#product-Details .color").find(".active").removeClass("active");
            $(this).addClass("active");
        })
    }

    changeProduct("#black", "Ninebot mini pro (black)", "$3699.90", "item-img-1-16-black.jpg");

    changeProduct("#white", "Ninebot mini pro (white)", "$3499.90", "item-img-1-16.jpg");

    $("#product-Details .size a").on("click", function (e) {
        e.preventDefault();
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
    })
})

window.addEventListener("load", function () {
    $("#preloader").fadeOut();
})