//menu shortcut 'm' key

//blog-nav-item category-menu
var main = function() {
  $('.blog-nav-item').click(function() {
      $('.blog-nav-item').removeClass('active');
      $(this).toggleClass("active");
    });

  $("#category-menu").click( function() {
    $(".blog-post").show();
  }); 
  $("#learning").click( function() {
    $(".blog-post").hide();
    $(".learning-post").show();
  }); 
  $("#data-viz").click( function() {
    $(".blog-post").hide();
    $(".data-viz-post").show();
  }); 
  $("#art").click( function() {
    $(".blog-post").hide();
    $(".art-post").show();
  }); 
  $("#nyc").click( function() {
    $(".blog-post").hide();
    $(".nyc-post").show();
  });
  $("#travel").click( function() {
    $(".blog-post").hide();
    $(".travel-post").show(); 
  });
}

$(document).ready(main);