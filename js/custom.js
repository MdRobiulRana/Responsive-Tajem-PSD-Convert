(function($){
    'use strict';

$('.header_navber_icons i.fa-bars').on('click', function(){
    $('.header_navber').animate({left:0});
    $(this).hide();
    $(' .header_navber_icons i.fa-xmark').show();
})
$('.header_navber_icons i.fa-xmark').on('click', function(){
    $('.header_navber').animate({left:-250});
    $(this).hide();
    $(' .header_navber_icons i.fa-bars').show();
})

// slick slider start
$('.slider_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
// slick slider end

// venobox video showing start
new VenoBox({
    selector: '.my-video-links',
});
// venobox video showing end

$('.tajem_work_buttons button').on('click', function(){
    $('.tajem_work_buttons button').removeClass('active');
    $(this).addClass('active');
});

// lightbox start

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

// lightbox end

// mixitUp start
var containerEl = document.querySelector('.mixitUp');

var mixer = mixitup(containerEl);
// mixitUp end

$(window).scroll(function(){
    var distance = $(window).scrollTop();
    if(distance > 300){
        $('header').addClass('tajem_header');
    }
    else{
        $('header').removeClass('tajem_header');
    }
});

$('.tajem_scrollTop').on('click', function(){
    $('html').animate({scrollTop: 0}, 800)
});

$(window).scroll(function(){
    var distance = $(window).scrollTop();
    if(distance > 500){
        $('.tajem_scrollTop').fadeIn();
    }
    else{
        $('.tajem_scrollTop').fadeOut();
    }
});


})(jQuery);