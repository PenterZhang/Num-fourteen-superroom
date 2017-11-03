//logo的特效
$(".h-logo").eq(0).mouseover(function(){
  $(".h-logo").eq(0).animate({opacity:0.8},200);
});
$(".h-logo").eq(0).mouseout(function(){
  $(".h-logo").eq(0).animate({opacity:1},200);
});


//右侧导航栏特效
$(".h-u").eq(0).mouseover(function(){
  $(".user-message").eq(0).addClass("show");
  $(".h-u-a").eq(0).addClass("light");
  $(".h-u").eq(0).addClass("bg1");
});
$(".h-u").eq(0).mouseout(function(){
  $(".user-message").eq(0).removeClass("show");
  $(".h-u-a").eq(0).removeClass("light");
  $(".h-u").eq(0).removeClass("bg1");
});

$(".h-u").eq(1).mouseover(function(){
  $(".gouwuche").eq(0).addClass("show");
  $(".h-u").eq(1).addClass("bg1");
});
$(".h-u").eq(1).mouseout(function(){
  $(".gouwuche").eq(0).removeClass("show");
  $(".h-u").eq(1).removeClass("bg1");
});

$(".h-u").eq(2).mouseover(function(){
  $(".u-m").eq(0).addClass("show");
  $(".u-m-a").eq(1).addClass("light");
  $(".h-u").eq(2).addClass("bg1");
});
$(".h-u").eq(2).mouseout(function(){
  $(".u-m").eq(0).removeClass("show");
  $(".u-m-a").eq(1).removeClass("light");
  $(".h-u").eq(2).removeClass("bg1");
});

$(".h-u").eq(3).mouseover(function(){
  $(".u-m-a").eq(2).addClass("light");
});
$(".h-u").eq(3).mouseout(function(){
  $(".u-m-a").eq(2).removeClass("light");
});


//右侧导航栏下拉菜单特效
$(".u-m-l").each(function(i){
    $(this).mouseover(function(){
      $(this).addClass("bg2");
    })
});
$(".u-m-l").each(function(i){
  $(this).mouseout(function(){
    $(this).removeClass("bg2");
  })
});

$(".g-no").mouseover(function(){
    $(this).addClass("bg2");
  });
$(".g-no").mouseout(function(){
  $(this).removeClass("bg2");
});

$(".u-m-ll").each(function(i){
  $(this).mouseover(function(){
    $(this).addClass("bg2");
  })
});
$(".u-m-ll").each(function(i){
$(this).mouseout(function(){
  $(this).removeClass("bg2");
})
});


//二级菜单导航
$(".bq1").eq(1).mouseover(function(){
  $(".bq2").eq(0).stop(true).slideDown();
});
$(".bq1").eq(1).mouseout(function(){
  $(".bq2").eq(0).stop(true).slideUp("fast");
});

$(".bq1").eq(2).mouseover(function(){
  $(".bq2a").eq(0).stop(true).slideDown();
});
$(".bq1").eq(2).mouseout(function(){
  $(".bq2a").eq(0).stop(true).slideUp("fast");
});

$(".bq1").eq(3).mouseover(function(){
  $(".bq2b").eq(0).stop(true).slideDown();
});
$(".bq1").eq(3).mouseout(function(){
  $(".bq2b").eq(0).stop(true).slideUp("fast");
});

$(".bq1bb").each(function(i){
  $(this).mouseover(function(){
    $(this).addClass("borderb");
  })
});
$(".bq1bb").each(function(i){
  $(this).mouseout(function(){
    $(this).removeClass("borderb");
  })
});

//搜索框
$(".search-icon").eq(0).click(function(){
  if($(".s-i").eq(0).css("left")!=14+"px"){
  $(".s-i").eq(0).stop(true,true).animate({left:14},500);
}else{
  $(".s-i").eq(0).stop(true,true).animate({left:266},500);
}
});

$(".search-icon").eq(0).mouseover(function(){$(".search-icon").eq(0).addClass("opacitys");
$(".search-icon").eq(0).css({"cursor":"pointer",})
});
$(".search-icon").eq(0).mouseout(function(){$(".search-icon").eq(0).removeClass("opacitys");
})


//手左右滑动
$(".handb").eq(0).mouseover(function(){
  $(".hand").eq(0).animate({"left":0},500,"linear",$(".hand").eq(0).animate({"left":-15},500,"linear",$(".hand").eq(0).animate({"left":0},500,"linear",$(".hand").eq(0).animate({"left":-15},500))));
})


//二维码
$(".down-land").eq(0).mouseover(function(){
  $(".download-code").eq(0).addClass("show");
  $(".down-land").eq(0).addClass("light2");
});
$(".down-land").eq(0).mouseout(function(){
  $(".download-code").eq(0).removeClass("show");
  $(".down-land").eq(0).removeClass("light2");
});

$(".download-code").eq(0).mouseover(function(){
  $(".download-code").eq(0).addClass("show");
  $(".down-land").eq(0).addClass("light2");
});
$(".download-code").eq(0).mouseout(function(){
  $(".download-code").eq(0).removeClass("show");
  $(".down-land").eq(0).removeClass("light2");
});

$(".tongxun").each(function(i){
  $(this).mouseover(function(){
    $(this).addClass("opacitys2")
  })
});
$(".tongxun").each(function(i){
  $(this).mouseout(function(){
    $(this).removeClass("opacitys2")
  })
});

$(".weixin").mouseover(function(){
  $(".weixin-code").addClass("show");
})
$(".weixin").mouseout(function(){
  $(".weixin-code").removeClass("show");
})


//底部
$(".t-ff").each(function(i){
  $(this).mouseover(function(){
    $(this).addClass("light2");
  })
});
$(".t-ff").each(function(i){
  $(this).mouseout(function(){
    $(this).removeClass("light2");
  })
});


//返回顶部
$("#totop").click(function() {
	$("body,html").animate({scrollTop: 0},500);
});
$(document).scroll(function() {
	var top = $(document).scrollTop();
	if (top > 200) {
		$("#totop").show();
	} else {
		$("#totop").hide();
	}
});
$("#totop").mouseover(function(){
  $("#totop a").eq(0).addClass("opacitys3");
});
$("#totop").mouseout(function(){
  $("#totop a").eq(0).removeClass("opacitys3")
});


//吸顶效果
$(document).scroll(function() {
	var top = $(document).scrollTop();
	if (top > 100) {
    $(".hheader").eq(0).stop(true).animate({"top":-56},500);
}else{
  $(".hheader").eq(0).stop(true).animate({"top":0},500);
}})