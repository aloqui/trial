$(window).on("resize", function () {
  var windowWd = $(window).width();
  $("body").css({"backgroundColor":"#111","opacity": "1"});
  if (windowWd >= 768) {
    $("nav").addClass("fixed-top text-lowercase");
    $(".collapse").removeClass("full-nav");
    $(".second-div:nth-of-type(2) .row").addClass("d-flex flex-row-reverse");
    $(".navbar li a").removeClass("navbarFontBlack");
    $(".brandd").css("color", "#000 !important");
    $(".mobileRespo").removeClass("mobile-nav-centered");
    $(".nav-pills").removeClass("d-flex flex-column");
    $("ul p").css("display", "none");
  } else {
    $("nav").removeClass("fixed-top text-lowercase");
    $(".collapse").addClass("full-nav");
    $(".nav-pills").addClass("d-flex flex-column");
    $(".mobileRespo").addClass("mobile-nav-centered")
    $(".second-div:nth-of-type(2) .row").removeClass("d-flex flex-row-reverse");
    $(".navbar li a").addClass("navbarFontBlack");
    $(".navbar-inverse .navbar-header .navbar-brand").css("color", "#fff !important");
    $("ul p").css("display", "block");
  }
 






}).trigger("resize");




$(window).scroll(function () {
  var wScroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  var windowWd = $(window).width();
  console.log(wScroll);
  if (windowWd >= 768) {
    if (wScroll >= 200) {
      $(".navbar").addClass("navbar-white");
      $(".navbar li a").addClass("navbarFontBlack");
      $(".navbar").css("padding", "3vh 0");
      $(".brandd").css("color", "#000 !important");
      console.log("White bg");
    } 
    else {
      $(".navbar li a, .brandd").removeClass("navbarFontBlack");
      $(".navbar-inverse .navbar-header .navbar-brand").css("color", "#fff !important");
      $(".navbar").css("padding", "7vh 0");
      $(".navbar").removeClass("navbar-white");
    }
  }
  else {
      $(".navbar").removeClass("navbar-white");
      
    }

  if (wScroll < $(".first-div .wrap h4").offset().top) {
    $("body").css("backgroundColor", "#111");

    //console.log("black");
  }


  if (wScroll >= $(".first-div .wrap h4").offset().top) {
    $("body").css("backgroundColor", "#185BAD");
    //console.log("blue!");
  }


  if (wScroll >= $(".square-wrapSmall").offset().top) {
    $("body").css("backgroundColor", "#670013");
    //console.log("red!");
  }
  if (wScroll >= $(".second-div:nth-of-type(2) #green").offset().top) {
    $("body").css("backgroundColor", "#7AB740");
    console.log("green!");
  }
  if (wScroll >= $(".second-div:nth-of-type(1) #darkgreen").offset().top) {
    $("body").css("backgroundColor", "#262D17");
    console.log("green!");
  }

  if($(wScroll >= $(".animLeftIn").offset().top - 60)) {
        $(".animLeftIn").css({ "opacity": "1", "transform": "translateX(0px)"});
  }

  
});