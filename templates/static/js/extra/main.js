$(function(){"use strict";$(window).on("load",function(a){$(".preloader").delay(500).fadeOut(500)}),$(window).on("scroll",function(a){$(window).scrollTop()<20?$(".navbar-area").removeClass("sticky"):$(".navbar-area").addClass("sticky")});var a=$(".page-scroll");$(window).scroll(function(){var o=$(this).scrollTop();a.each(function(){$(this.hash).offset().top-73<=o&&($(this).parent().addClass("active"),$(this).parent().siblings().removeClass("active"))})}),$(".navbar-nav a").on("click",function(){$(".navbar-collapse").removeClass("show")}),$(".navbar-toggler").on("click",function(){$(this).toggleClass("active")}),$(".navbar-nav a").on("click",function(){$(".navbar-toggler").removeClass("active")}),$(".video-popup").magnificPopup({type:"iframe"}),$(".image-popup").magnificPopup({type:"image",gallery:{enabled:!0}}),$(window).on("scroll",function(a){$(this).scrollTop()>600?$(".back-to-top").fadeIn(200):$(".back-to-top").fadeOut(200)}),$(".back-to-top").on("click",function(a){a.preventDefault(),$("html, body").animate({scrollTop:0},1500)}),jQuery("img.svg").each(function(){var a=jQuery(this),o=a.attr("id"),t=a.attr("class"),n=a.attr("src");jQuery.get(n,function(n){var e=jQuery(n).find("svg");void 0!==o&&(e=e.attr("id",o)),void 0!==t&&(e=e.attr("class",t+" replaced-svg")),e=e.removeAttr("xmlns:a"),a.replaceWith(e)},"xml")}),(new WOW).init()});