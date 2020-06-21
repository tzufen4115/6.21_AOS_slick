// 初始化
$(document).ready(function(){
    AOS.init();

// ,結尾

    $('#banner').slick({
        autoplay:true,
        autoplaySpeed: 1000,
        arrows:false,
    });

    $('#brand').slick({
        slidesToShow:5,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 1000,
        dots:true,
        arrows:false,
        variableWidth:true
    });
});