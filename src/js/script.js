var  mn = $(".main-nav");
    hdr = $('.titleBox').height();

$(document).scroll(function() {
  if( $(document).scrollTop() > hdr ) {
    mn.addClass("scrolled");
  } else {
    mn.removeClass("scrolled");
  }
});