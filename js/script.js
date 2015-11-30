// JavaScript Document
$(document).ready(function (){

  var headerHeight = $("#header").height();
  var documentScrollTop = $(document).scrollTop();
  var section1ScrollTop = Math.round($("#section1").offset().top)-headerHeight;
  var section2ScrollTop = Math.round($("#section2").offset().top)-headerHeight;
  var section3ScrollTop = Math.round($("#section3").offset().top)-headerHeight;

  var icons = {
         header: "iconClosed",
         activeHeader: "iconOpen" 
     };

  function initAccordion(){
  $( "#accordion" ).accordion({
      active: false,
      collapsible: true,
      icons: icons
  });  
  } 
  initAccordion();
  
  $(".navButton").on("click", function(){
      initAccordion(); 
  });
  
  $(window).resize(function () {
    headerHeight = $("#header").height();
    documentScrollTop = $(document).scrollTop();
    section1ScrollTop = Math.round($("#section1").offset().top)-headerHeight;
    section2ScrollTop = Math.round($("#section2").offset().top)-headerHeight;
    section3ScrollTop = Math.round($("#section3").offset().top)-headerHeight;
  });

  $(window).scroll(function() {
  documentScrollTop = $(document).scrollTop();
  if(documentScrollTop==section1ScrollTop)
  {
    $(".infoButton").prop("disabled", true);
    $(".educationButton").prop("disabled", false);
    $(".workButton").prop("disabled", false);
  }
  else if(documentScrollTop==section2ScrollTop)
  {
    $(".infoButton").prop("disabled", false);
    $(".educationButton").prop("disabled", true);
    $(".workButton").prop("disabled", false);
  }
  else if(documentScrollTop==section3ScrollTop)
  {
    $(".infoButton").prop("disabled", false);
    $(".educationButton").prop("disabled", false);
    $(".workButton").prop("disabled", true);
  }
  else {
    $(".infoButton").prop("disabled", false);
    $(".educationButton").prop("disabled", false);
    $(".workButton").prop("disabled", false);
  }
  });

  $(".infoButton").click(function() {
    if ($("html, body").is(":animated"))
    {
      return false;
    }
    else
    {
      $("html, body").animate({
          scrollTop: Math.round($("#section1").offset().top) - $("#header").height()
      }, 800);
    }
  });
    
  $(".educationButton").click(function() {
    if ($("html, body").is(":animated"))
    {
      return false;
    }
    else
    {
      $("html, body").animate({
          scrollTop: Math.round($("#section2").offset().top) - $("#header").height()
      }, 800);
    }
  });
  
  $(".workButton").click(function() {
    if ($("html, body").is(":animated"))
    {
      return false;
    }
    else
    {   
      $("html, body").animate({ 
        scrollTop:  Math.round($("#section3").offset().top) - $("#header").height()                     
      }, 800);
    }
  });
  
  $(".fancybox-buttons").fancybox({
				openEffect  : "none",
				closeEffect : "none",

				prevEffect : "none",
				nextEffect : "none",

				closeBtn  : true,
        
				helpers : {
					title : {
						type : "inside"
					},
          overlay: {
            locked: false
          },
					buttons	: {}
				},

				afterLoad : function() {
					this.title = "Kuva " + (this.index + 1) + " / " + this.group.length + (this.title ? " - " + this.title : "");
				}
			});
  
});