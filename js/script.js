// Window Load screen

$(window).on('load', function () {

    // Mixitup
    // var mixer = mixitup('.container-item');

    // Set Lang On Page Load
    const lang = localStorage.getItem("langPage");

    if(lang === 'ar'){
        $( "html" ).attr("dir", "rtl");
        document.getElementsByClassName("btn-lang").value =  'en';
        $(".btn-lang").text('EN');
    }else if(lang === 'en'){
        $( "html" ).attr("dir", "ltr");
        document.getElementsByClassName("btn-lang").value =  'ar';
        $(".btn-lang").text('AR')
    }else {
        $( "html" ).attr("dir", "rtl");
        document.getElementsByClassName("btn-lang").value =  'en';
        $(".btn-lang").text('EN');
    }

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".loading").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

    // Animation Page
    AOS.init();

});

$(document).ready(function () {

    // Scroll Fix Header
    $(window).scroll(function () {
        if($(this).scrollTop() > 30){
            $('.header').addClass('header-fixed')
        }else{
            $('.header').removeClass('header-fixed')
        }
    });

    // Scroll For Section
    $(document).on("click", ".header ul li a",function(e) {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 100
        }, 1000);
        e.preventDefault();
        if ($(window).width() < 990) {
            $(".handle").toggleClass("closed bgDefault");
            $(".click-nav").toggleClass("m-0");
            $(".head-links").toggleClass("back");
         }
    });

    // Click Open Nav Mobile
    $(document).on("click", ".click-nav",function() {
        $(".handle").toggleClass("closed bgDefault");
        $(".click-nav").toggleClass("m-0");
        $(".list-item").toggleClass("back");
    });
    
    // Change Lang
    $(document).on("click", ".btn-lang",function() {
        location.reload();
        const LangVal   = document.getElementsByClassName("btn-lang").value;
        localStorage.setItem("langPage", LangVal);
    });

    // Slider Owl
    $('#sliderOurClient').owlCarousel({
        loop:true,
        margin:5,
        center:true,
        autoplay:true,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 6000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});