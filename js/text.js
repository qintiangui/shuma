// $(document).ready(function(){

// /*定义位置：由于图片个数与下侧顺序按钮数量一致，可通过位置进行关联*/
// var num = 0;
// var playTime = 1000;
// /*当鼠标放到顺序按钮上时：
// .防止移动过快导致的效果闪现，使用stop方法
// */
// $(".slide .btnf li a").mousemove(function () {
//    //获取a元素的父级元素li的索引值存进变量num 可能的值分别为 0,1,2
//    var num = $(this).parent().index();
//     //根据索引值计算出应该移动的距离,存进变量movePx
//    var movePx = num* -1920 + "px";
//    //给.img盒子添加边距
//    $(".img").css("marginLeft",movePx);
//    //根据索引的值找到相应的a元素，并且添加一个蓝色背景，同时移除其他a元素的蓝色背景
//    $(".slide .btnf li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
// });

// /*设置每一秒钟自动轮播：
// 1.获取当前位置序号：自加操作；当超过图片最大序号时序号设置为0
// 2.设置下侧顺序按钮及轮播图显示
// */
// var time=setInterval(moves,playTime);
// function moves() {
//    num++;
//    if (num==3){
//       num=0
//    }
//    var movePx=num*-1920+"px";
//    // alert(movePx);
// //$(".num li").eq(index).addClass("current").siblings().removeClass("current");
//    $(".img").eq(num).animate({"marginleft":movePx},playTime);
//    $(".slide .btnf li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
//    // return false;
// };
// /*当鼠标划入、划出轮播图区域时：
// 1.划入时停止自动轮播
// 2.划出时继续自动轮播
// */
// $(".slide").hover(
//    function () {
//       // alert(123);
//       clearInterval(time);
//    },
//    function () {
//       // alert(456);
//       time = setInterval(moves,playTime);
//    }
// );
// /*点击右侧按钮时执行*/
// // alert($(".next").html());
// $(".next").click(function () {
//    // alert("123")
//   moves();
// });
// /*点击左侧按钮时执行*/
// function moveL() {
//    num--;
//    if (num==-1){
//       num=2
//    }
//    var movePx=num*-1920+"px";
// //$(".num li").eq(index).addClass("current").siblings().removeClass("current");
// $(".img").eq(num).animate({"marginleft":movePx},playTime);
// $(".slide .btnf li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
//    // return false;
// }
// $(".prev").click(function () {
//    moveL();
// });

// });
   /* var metLl= document.querySelector(".ll");
        var mUl = metLl.getElementsByTagName("ul")[0];
        var mLi = mUl.getElementsByTagName("li");
        var mUlH = mUl.offsetHeight;  //一个ul的高
        var speed = 2;
        metLl.innerHTML +=metLl.innerHTML;
        var mul1 = metLl.getElementsByTagName("ul")[1];
        mul1.innerHTML ="<li><a>京狮商城未来为您装点魅力人生</a></li><li><a>江西省云计算及物联网高峰论坛成功举办</a></li><li><a>中国电子信息行业联合会在京正式成立</a></li>"
        var mulLenght = metLl.getElementsByTagName("ul").length;
        metLl.style.height = mUlH*mulLenght + "px"; 
        time =  setInterval(moves,100);
        function moves(){
        if(metLl.offsetTop<'-'+(metLl.offsetHeight/2)){
            metLl.style.top = 0;
            //console.log(metLl.style.top);
        }
        if(metLl.offsetTop>0){
            metLl.style.top = '-'+(metLl.offsetHeight/2) + 'px'; 
        }
            metLl.style.top = metLl.offsetTop + speed +"px";
        }
        //console.log(mulLenght);
        //鼠标经过UL停止 
        metLl.onmouseover =function(){
            clearInterval(time)
        }
        // 鼠标离开ul 开启
        metLl.onmouseout =function(){
            time = setInterval(moves,100);
        } */