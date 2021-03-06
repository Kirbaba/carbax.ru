/*-------------GOOGLE MAPS-----------------*/

function initialize() {

    var myLatlng = new google.maps.LatLng(55.662561,37.540873);
    var mapOptions = {
        center: new google.maps.LatLng(55.662561,37.540873),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);    
    var image = '../img/service_icon.png';
    var myLatLng = new google.maps.LatLng(55.662561,37.540873);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;





jQuery(document).ready(function($) {
    var img = $('.example-image');
    setTimeout(function() { 
    img.each(function(){
        var heightEl = $(this).height();
        var topEl = (330 - heightEl)/2 ;
        $(this).css({
            top: topEl        
        });
    });
    }, 3000);   
});

jQuery(document).ready(function($) {
    var txt = $('.advantages__block__text');
    txt.each(function(){
        var h = $(this).height();
        var t = (320 - h)/2 ;
        $(this).css({
            top: t
        });
    });
    /*txt.each(function(){
    var heightEl = $(this).height();
    
    });*/
$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.smoothScroll').click(function(event) {
        event.preventDefault();        
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        console.log(top);
        $('html,body').animate({
            scrollTop: top
        }, 1000);
    });
});
});

$( ".first__but--but" ).click(function() {
  $(".first-nav").slideToggle('slow');
});

$( ".header--request--open" ).click(function() {
  $(".head-nav").slideToggle('slow');
});

$( ".menu-open-flag" ).click(function() {
  $(".side-nav").slideToggle('slow');
});

$( ".header--perscab" ).click(function() {
  $(".cab-nav").slideToggle('slow');
});
// Барахолка - звуздочка избранного
$( ".fleamarket__ads__item--desc--star" ).click(function() {
  $(this).toggleClass('fleamarket__ads__item--desc--star--active');
});

/*header-slider*/
$('.header__slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.header__slider2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
/*close header-slider*/