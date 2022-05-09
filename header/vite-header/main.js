import './style.css'


import $ from "jquery";

function parallax_height(){
  var scroll_top = $(this).scrollTop();
  var header_height = $(".sample-header-section").outerHeight();
  $(".text-section").css({ "margin-top": header_height});
  $(".sample-header").css({ height: header_height - scroll_top });
}

parallax_height();

$(window).on('scroll',parallax_height);
$(window).on('resize',parallax_height);
