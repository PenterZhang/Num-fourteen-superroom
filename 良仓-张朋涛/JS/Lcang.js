
//搜索框显示与隐藏
$("#magnifier").click(function(){
    if($("#sch").css("marginLeft")=="226px"){
        $("#sch").animate({"marginLeft":0});
    }else{
        $("#sch").animate({"marginLeft":226});
    }
});


//轮播图


var w = $("#m_unit ul li").innerWidth();
$("#rightBtn").click(function() {
	move();
});
setInterval(move, 1000);
var i = 0;
function move() {
	if ($("#m_unit").is(":animated")) {
		return ; 
	}
	i++;
	$("#m_unit").animate({"left": -i*w}, 1000, function() {
		if (i >= 5) {
			i = 0; 
			$("#m_unit").css({"left": 0});
		}
		$(".circles ol li").removeClass("current");
		$(".circles ol li").eq(i).addClass("current");
	});
}







//获取商品参数
var url = "http://h6.duchengjiu.top/shop/api_goods.php";
var data = {
    "cat_id":"0",
    // "page":"0",
    // "pagesize":"0"
}
var a=[];
$.ajax({
    url:url,
    type:"GET",
    data:data,
    success:function(str){
        var a=str.data;
        console.log(str);
        for(var i=0;i<a.length-1;i++){    
        $(".shoppings ul").append("<li></li>");
        $(".shoppings ul li").eq(i).css("background-image","url("+a[i].goods_thumb+")");
        if(i%3==0){
            $(".shoppings ul li").eq(i).css("margin-left","0");
        }
        }
    $(".shoppings ul li").each(function(i){
            $(this).click(function(){
                window.open("lc-xiangqing.html?"+a[i].goods_id);
            })
        }) 
        $(".shoppings ul li").append("<div></div>");
        $(".shoppings ul li").each(function(i){
            $(this).children("div").append("<i>"+"￥"+a[i].price+"</i>");
        })
        $(".shoppings ul li").each(function(i){
            $(this).children("div").append("<h3>"+a[i].goods_name+"</h3>");
        })
        $(".shoppings ul li").each(function(i){
            $(this).children("div").append("<p>"+a[i].goods_desc+"</p>");
        })
    }
})
window.onload = function (){
    
}






//良仓仓库小手动画

$(".service a").mouseover(function(){
    $(".hand").animate({"marginLeft":-85});
    $(".hand").animate({"marginLeft":-60});
    $(".hand").animate({"marginLeft":-85});
    $(".hand").animate({"marginLeft":-55});
})







// 点击返回顶部
$(".call").click(function() {
	$("body,html").animate({scrollTop: 0});
});
$(document).scroll(function() {
	var top = $(document).scrollTop();
	if (top > 200) {
		$(".call").show(1000);
	} else {
		$(".call").hide(1000);
	}
})
