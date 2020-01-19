$(window).scroll(function(){
  if($(window).scrollTop()>0){
    $(".navbar").css("background-color","#F0F0F0")
    $(".navbar").css("border-bottom","solid 1px #cccccc")
  }else{
    $(".navbar").css("background-color","")
    $(".navbar").css("border-bottom","")
  }
});
$(".aclick").click(function(){
  var to=$(this).attr("href");
  $("body,html").animate({
    scrollTop: $(to).position().top
  },800);
});
var i=0;
$(window).scroll(function(){
   if($(window).scrollTop()>=1680&&i==0){
   setTimeout(function(){
     $(".bar1").css("width","257px")
   },800)
   var time=0;
   var interval=setInterval(function(){
     i+=1;
     time+=1;
     $(".point1").text(""+time+"%")
     if(time ==92){
      clearInterval(interval);
     }
   },18)
}
});
var i=0;
$(window).scroll(function(){
   if($(window).scrollTop()>=1680&&i==0){
   setTimeout(function(){
     $(".bar2").css("width","224px")
   },800)
   var time=0;
   var interval=setInterval(function(){
     i+=1;
     time+=1;
     $(".point2").text(""+time+"%")
     if(time ==80){
      clearInterval(interval);
     }
   },20)
}
});
var i=0;
$(window).scroll(function(){
   if($(window).scrollTop()>=1680&&i==0){
   setTimeout(function(){
     $(".bar3").css("width","210px")
   },800)
   var time=0;
   var interval=setInterval(function(){
     i+=1;
     time+=1;
     $(".point3").text(""+time+"%")
     if(time ==75){
      clearInterval(interval);
     }
   },20)
}
});
var i=0;
$(window).scroll(function(){
   if($(window).scrollTop()>=1680&&i==0){
   setTimeout(function(){
     $(".bar4").css("width","263px")
   },800)
   var time=0;
   var interval=setInterval(function(){
     i+=1;
     time+=1;
     $(".point4").text(""+time+"%")
     if(time ==94){
      clearInterval(interval);
     }
   },18)
}
});

$(".designR").click(function(){
  $(".bottomL").hide();
  $(".bottomR").show();
  $(".miss").hide();
  $(".content_2").show();
  $(".content_2").css("display","flex");
});
$(".designL").click(function(){
  $(".bottomR").hide();
  $(".bottomL").show();
  $(".miss").show();
  $(".content_2").hide();
});
$(".gotop").click(function(){
  $("body,html").animate({
    scrollTop: 0
  },1000);
});
$(window).scroll(function(){
  if($(this).scrollTop()>350){
    $(".gotop").fadeIn("fast");
  }else{
    $(".gotop").fadeOut("fast");
  }
});
$(".aclick").click(function(){
  if($(window).width()<991.98){
    $(".navbar-toggler").trigger("click");
  };
});
