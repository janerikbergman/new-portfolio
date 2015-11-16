// JavaScript Document
$(document).ready(function (){

  $("#infoButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top - $("#header").height()
    }, 1000);
  });
  $("#educationButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top  - $("#header").height()
    }, 1000);
  });
  $("#workButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#section3").offset().top - $("#header").height()
    }, 1000);
  });

 /*$(function(){
 var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $("#header").addClass("shrink");
        }
        else {
            $("#header").removeClass("shrink");
        }
  });
  function getCurrentScroll() {
      return window.pageYOffset;
      }
  }); */ 
  
});