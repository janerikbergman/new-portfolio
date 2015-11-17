// JavaScript Document
$(document).ready(function (){

  var headerHeight = $("#header").height();
  var documentScrollTop = $(document).scrollTop();
  var section1ScrollTop = Math.round($("#section1").offset().top)-headerHeight;
  var section2ScrollTop = Math.round($("#section2").offset().top)-headerHeight;
  var section3ScrollTop = Math.round($("#section3").offset().top)-headerHeight;
  
  $(window).resize(function () {
    headerHeight = $("#header").height();
    documentScrollTop = $(document).scrollTop();
    section1ScrollTop = Math.round($("#section1").offset().top)-headerHeight;
    section2ScrollTop = Math.round($("#section2").offset().top)-headerHeight;
    section3ScrollTop = Math.round($("#section3").offset().top)-headerHeight;
  });

  $(window).scroll(function() {
  if($(document).scrollTop()==section1ScrollTop)
  {
    $("#infoButton").prop("disabled", true);
    $("#educationButton").prop("disabled", false);
    $("#workButton").prop("disabled", false);
  }
  else if($(document).scrollTop()==section2ScrollTop)
  {
    $("#infoButton").prop("disabled", false);
    $("#educationButton").prop("disabled", true);
    $("#workButton").prop("disabled", false);
  }
  else if($(document).scrollTop()==section3ScrollTop)
  {
    $("#infoButton").prop("disabled", false);
    $("#educationButton").prop("disabled", false);
    $("#workButton").prop("disabled", true);
  }
  });

    

  $("#infoButton").click(function() {
    if ($('html, body').is(':animated'))
    {
      return false;
    }
    else
    {
      $('html, body').animate({
          scrollTop: Math.round($("#section1").offset().top) - $("#header").height()
      }, 1000);
    }
  });
    
  $("#educationButton").click(function() {
    if ($('html, body').is(':animated'))
    {
      return false;
    }
    else
    {
      $('html, body').animate({
          scrollTop: Math.round($("#section2").offset().top) - $("#header").height()
      }, 1000);
    }
  });
  
  $("#workButton").click(function() {
    if ($('html, body').is(':animated'))
    {
      return false;
    }
    else
    {
      $('html, body').animate({
          scrollTop: Math.round($("#section3").offset().top) - $("#header").height()
      }, 1000);
    }
  });
  
});