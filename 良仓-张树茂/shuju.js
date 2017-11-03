//用户登录/获取用户数据
var url1 = "http://h6.duchengjiu.top/shop/api_user.php";
var data = {
  status: "login",  // 登陆
  username: "zhangsan1112", // 用户名
  password: "123456"
}
$.post(url1, data, function(obj) {
  console.log(obj);
  // $.cookie("token", obj.data.token);
  localStorage.setItem("token",obj.data.token);
  $(".u-m-a").eq(0).append("<img src="+'"'+obj.data.avatar+'"'+" style='margin-right:5px;'>");
  $(".u-m-a").eq(0).append("<span>"+obj.data.username+"</span>");
});
console.log(localStorage.token);

//传cookie值
var token=localStorage.token;
var headers={
  token:token,
}
console.log(headers);

//更新购物车(未实现/post方式，get头)
var url4="http://h6.duchengjiu.top/shop/api_cart.php/"+token;
var data={
  goods_id:34396,
  number:1,
}
$.post(url4,data,function(obj){
  console.log(obj);
});



//获取用户购物车列表信息（）
var url2="http://h6.duchengjiu.top/shop/api_cart.php"+"/"+token;
$.ajax({
  type:"get",
  url:url2,
  headers:headers,
  success: function(obj) {
    console.log(obj);
    if(obj.code!=0){
      return;
    }else{
      $(".number").eq(0).text(obj.data.number);
      $(".g-no").eq(0).css({"display":"none"});
      $("g-have").eq(0).css({"display":"block"});
      $(".g-g").eq(0).text("查看我的购物车");
      for(var i=0;i<obj.data.goods_number;i++){
        $(".back").eq(0).clone.append(".g-have:first");
      }
      $(".protit").each(function(i){
        $(this).text(data.goods_name)
      });
      $(".procolorsize").each(function(i){
        $(this).text(data.cat_id)
      });
      $(".prinum").each(function(i){
        $(this).text(data.goods_number)
      });
      $(".proprice").each(function(i){
        $(this).text(data.goods_price)
      });

      
    }
  },
  async:true,
});



// //订单列表
// var url3="http://h6.duchengjiu.top/shop/api_order.php";
// $.ajax({
//   type:"get",
//   url:url3,
//   headers:headers,
//   success: function(obj) {
//     console.log(obj);
//   },
//   async:true,
// });