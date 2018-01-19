/**
 * Created by Administrator on 2018/1/18.
 */
/*导航开始部分*/
function start(){
    var cont=$(".topWrap>.menu>li:eq(3)>a").val();
    if(cont=="领取网易严选宝箱"){
        $(".topWrap>.menu>li:eq(3)").html("<a href='#'>游戏充值9.8折</a>")
    }else{
        $(".topWrap>.menu>li:eq(3)").html("<a href='#'>领取网易严选宝箱</a>")
    }
    console.log(cont);
};
setInterval(start,1000);
/*导航结束部分*/
/*导航下拉菜单的开始部分*/
/*$("#newmenu").hover(function(){
    $("#mymemu").toggle()
});*/
/*导航下拉菜单的开始结束*/
