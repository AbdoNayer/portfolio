// Window Load screen

$(window).on('load', function () {

    // Set Lang On Page Load
    const lang = localStorage.getItem("langPage");

    if(lang === 'en'){
        $( "html" ).attr("dir", "ltr");
        $( "html" ).attr("lang", "en");
        document.getElementsByClassName("btn-lang").value =  'ar';
        $(".btn-lang").text('AR');
    }else {
        $( "html" ).attr("dir", "rtl");
        $( "html" ).attr("lang", "ar");
        document.getElementsByClassName("btn-lang").value =  'en';
        $(".btn-lang").text('EN');
    }

    // Mode Theme

    const theme = localStorage.getItem("modeTheme");

    if(theme === 'dark'){
        $( "html" ).attr("theme", "dark");
        $('.btn-theme').addClass('dark');
    }else {
        $( "html" ).attr("theme", "light");
        $('.btn-theme').addClass('light');
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
        if ($(window).width() > 1060) {
            if($(this).scrollTop() > 30){
                $('header').addClass('header-fixed')
            }else{
                $('header').removeClass('header-fixed')
            }
        }
    });

    // Scroll For Section
    $(document).on("click", "nav ul li a",function(e) {
        e.preventDefault();
        // $('html, body').animate({
        //     scrollTop: $('#' + $(this).data('value')).offset().top - 100
        // }, 1000);
        // if ($(window).width() < 990) {
        //     $(".handle").toggleClass("closed");
        //     $("nav").toggleClass("back");
        //  }
    });

    // Click Add class Link
    $(document).on("click", "nav ul li",function(e) {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Click Open Nav Mobile
    $(document).on("click", ".click-nav",function() {
        $(".handle").toggleClass("closed");
        $("nav").toggleClass("back");
        $("nav li").toggleClass("animSlideIn");
        $("body").toggleClass("overflow-hidden");
    });
    
    // Change Lang
    $(document).on("click", ".btn-lang",function(e) {
        location.reload();
        const LangVal   = document.getElementsByClassName("btn-lang").value;
        localStorage.setItem("langPage", LangVal);
    });

    // Change Mode Theme
    $(document).on("click", ".btn-theme",function() {
        if($('.btn-theme').hasClass('light')){
            $( "html" ).attr("theme", "dark");
            localStorage.setItem("modeTheme", 'dark');
            $('.btn-theme').addClass('dark');
            $('.btn-theme').removeClass('light');
        }else{
            $( "html" ).attr("theme", "light");
            localStorage.setItem("modeTheme", 'light');
            $('.btn-theme').addClass('light');
            $('.btn-theme').removeClass('dark');
        }
    });
    
    // Slider Skills
    $('#sliderSkills').owlCarousel({
        loop:false,
        margin:5,
        center:false,
        autoplay:false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 3000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow"></i>',
            '<i class="icon-arrow"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // Slider Experience
    $('#sliderExperience').owlCarousel({
        loop:false,
        margin:5,
        center:false,
        autoplay:false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 3000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow"></i>',
            '<i class="icon-arrow"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    // Slider Project
    $('#sliderProject').owlCarousel({
        loop:false,
        margin:5,
        center:false,
        autoplay:false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 3000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow"></i>',
            '<i class="icon-arrow"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

});



