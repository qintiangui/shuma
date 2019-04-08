$(document).ready(function(){

    var Slide = document.querySelector('.slide');
	var Prev = document.getElementById('prev');
	var Next = document.getElementById('next');
	var Ul = Slide.getElementsByTagName('ul')[0];
	var Li = Ul.getElementsByTagName('li');
	var Div = Slide.getElementsByTagName('div');
	var index = 0;
	var set = setInterval(next,3000);

	for(var i=0; i<Li.length; i++){
		Li[i].index = i;
		Li[i].onmouseover=function(){
			index = this.index;
			move(index);
		}
	}
	Slide.onmouseover = function(){
		clearInterval(set);
		Prev.style.display = Next.style.display = 'block';
	}
	Slide.onmouseout = function(){
		set = setInterval(next,3000);
		Prev.style.display = Next.style.display = 'none';
	}
	Prev.onclick = function(){
		prev();
	}
	Next.onclick = function(){
		next();
	}
	function next(){
		index++;

		if(index>2){
			index = 0;
		}
		
		move(index);
	}
	function prev(){
		index--;

		if(index<0){
			index = 2;
		}

		move(index);
	}
	function move(index){
		for(var i=0; i<Li.length; i++){
			Li[i].className = '';
			Div[i].className = '';
		}	
		Li[index].className = 'sli';
		Div[index].className = 'sdiv';
    }
    
    //新闻向上滚动
    $(function(){
    //单行应用@Mr.Think
    var _wrap=$('.ll ul');//定义滚动区域
    var _interval=2000;//定义滚动间隙时间
    var _moving=null;//需要清除的动画

    _wrap.hover(function(){
    clearInterval(_moving);//当鼠标在滚动区域中时，停止滚动
    },function(){
    _moving=setInterval(function(){
    var _field=_wrap.find('li:first');//此变量不可放置于函数起始处，li:first取值是变化的
    // var _field=$('ul li:first');
    var _h=_field.height();//取得每次滚动高度
    _field.animate({marginTop:-_h+'px',opacity:0},600,function(){//通过取负margin值，隐藏第一行
    _field.css({marginTop:0,opacity:1}).appendTo(_wrap);//隐藏后，将该行的margin值置零，并插入到最后，实现无缝滚动
    })
    },_interval)//滚动间隔时间取决于_interval
    }).trigger('mouseleave');//函数载入时，模拟执行mouseleave，即自动滚动
    });

    //切换图片
    $(".card .left p").click(function(){
        //alert($(this).parent().parent().children("ul").children("li").eq(0).html());
        $(this).addClass("active");
        $(this).parent().next().children().removeClass("active");
        $(this).parent().parent().children("ul").children("li").eq(0).addClass("on");
        $(this).parent().parent().children("ul").children("li").eq(1).removeClass("on");
    });
    $(".card .right p").click(function(){
        $(this).addClass("active");
        $(this).parent().prev().children().removeClass("active");
        $(this).parent().parent().children("ul").children("li").eq(1).addClass("on");
        $(this).parent().parent().children("ul").children("li").eq(0).removeClass("on");
    });

// $(".con").on("click",".title",function(){
            // if("block"==$(this).next().css("display")){
            //     $(this).next().css("display","none");
            // }else{
            //     $(this).next().css("display","block");
            // }
            // });





})