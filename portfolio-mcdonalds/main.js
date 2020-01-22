$(window).scroll(function(){
  if($(window).scrollTop()>0){
    $(".navbar").css("background-color","#F0F0F0")
    $(".navbar").css("border-bottom","solid 1px #cccccc")
  }else{
    $(".navbar").css("background-color","")
    $(".navbar").css("border-bottom","")
  }
});
$(".gotop").click(function(){
  $("body,html").animate({
    scrollTop: 0
  },1000);
});
$(window).scroll(function(){
  if($(this).scrollTop()>350){
    $(".gotop").fadeIn("fast")
  }else{
    $(".gotop").fadeOut("fast")
  }
});
$("#single_image").on("click", function() {
  $.fancybox.open({
   type : 'html',
   src  : '<div class="fancybox-scroll"><img src="' + this.href + ' " width="100%"/></div>',
    opts : {
      smallBtn : false,
      idleTime : false
    }
  });
  return false;
});
