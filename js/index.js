$(document).ready(function(){
  $("h1").fadeIn(3000)
    $(".close, .hamburger").click(function(e) {
      $("nav ul").toggleClass("open-nav");
      e.preventDefault();
    })
});
