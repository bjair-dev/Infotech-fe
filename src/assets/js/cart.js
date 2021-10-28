$('#cart, .shopping-cart').hover(function(e) {
    $(".shopping-cart").stop(true, true).addClass("active");
  }, function() {
    $(".shopping-cart").stop(true, true).removeClass("active");
  });  