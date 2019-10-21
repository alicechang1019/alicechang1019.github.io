$(document).ready(function(){
  if ($(window).width() < 576) {
    $('.header').height($(window).height()/1.5); //直式
  } else {
    $('.header').height($(window).height()/1.4); //橫式
  }
})
