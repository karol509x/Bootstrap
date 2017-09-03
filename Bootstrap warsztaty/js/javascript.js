'use strict';

$(document).ready(function () {
    
});

$(window).scroll(function() {
    navAddClass();
});

function navAddClass() {
    var navHeight = $('#nav').height();
    console.log(navHeight);
    
    var windowScrollPosition = $(window).scrollTop();

    if (windowScrollPosition >= navHeight) {
            $(navHeight).addClass('scrolled');
        } else {
            $('#nav').removeClass('scrolled');
            }
        }