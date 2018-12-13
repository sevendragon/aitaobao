//搜索框设置
var xqy1_search=document.getElementById("xqy1_search");
var xqy1_searchContent=document.getElementById("xqy1_searchContent");
xqy1_search.onkeyup=function(){
    var s=document.createElement("script");
    s.src="https://suggest.taobao.com/sug?code=utf-8&q="+xqy1_search.value+"&_ksTS=1542866740021_6609&callback=fn&k=1&area=c2c&bucketid=4";
    document.getElementsByTagName("head")[0].appendChild(s);
    document.getElementsByTagName("head")[0].removeChild(s);
}
function fn(data){
     var res=data.result;
    console.log(data.result);
     var str="";
     res.forEach(item=>{
         str+=`<li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${item[0]}&suggest=0_2&_input_charset=utf-8&wq=e&suggest_query=e&source=suggest">${item[0]}</a></li>`
     })
    xqy1_searchContent.innerHTML=str;   
 }
//点击消失_选择手机型号等信息
$("#buyway").on("click",function(){
    $("#phoneYH").css("display","none");
})
$("#save1").on("click",function(){
    $("#save2").css("display","none");
})

//buyL1_1 叉
$("#buyL1_1_cha").on("click",function(){
    $("#buyL1_1_video").css("display","none");
})
$("#buyL1_1_play").on("click",function(){
    $("#buyL1_1_video").css("display","block");
})

//右侧手机颜色信息选项
$(".phone_color>li").click(function(){
    $(".phone_color>li").css("border","1px solid #eee").eq($(this).index()).css("border","2px solid #ff0036")
})
//右侧手机套餐信息选项
$(".taocan li").click(function(){
    $(".taocan li").css("border","1px solid #eee").eq($(this).index()).css("border","2px solid #ff0036")
})
//右侧手机存储容量信息选项
$(".store li").click(function(){
    $(".store li").css("border","1px solid #eee").eq($(this).index()).css("border","2px solid #ff0036")
})


//aside侧边
$(".aside i").on("mouseover",function(){
    $(this).css("color","yellow").css("background","blue");
})
$(".aside i").on("mouseout",function(){
    $(this).css("color","#fff").css("background","#000");
})
$(".aside_shop i").on("mouseover",function(){
    $(".aside_shop").css("color","yellow").css("background","blue");
})
$(".aside_shop i").on("mouseout",function(){
    $(".aside_shop").css("color","#fff").css("background","#000");
})
$(".aside_shop p").on("mouseover",function(){
    $(".aside_shop").css("color","yellow").css("background","blue");
})
$(".aside_shop p").on("mouseout",function(){
    $(".aside_shop").css("color","#fff").css("background","#000");
})
$("#top_position").on("click",function(){
    document.documentElement.scrollTop=0;
})


// buyL3_L12_baobeipaihang 宝贝排行左1
var baby_sell_title=document.getElementById("baby_sell_title")
var baby_store_title=document.getElementById("baby_store_title")
baby_sell_title.onmouseover=function(){
    baby_sell_title.style.background="#fff";
    baby_store_title.style.background="#e1e1e1"
    buyL3_L12_baby_sell.style.display="block"
    buyL3_L12_baby_store.style.display="none"
}
baby_store_title.onmouseover=function(){
    baby_store_title.style.background="#fff";
    baby_sell_title.style.background="#e1e1e1"
    buyL3_L12_baby_sell.style.display="none"
    buyL3_L12_baby_store.style.display="block"
}

var  olis=document.querySelectorAll(".buyL3_R1 .buyL3_R_change");
//中间--商品、规格、评价--原生js-for --方法2
// $("olis").click(function(){
//     $("olis").css("border-top","none").css("border-left","none").css("border-right","none").css("color","#333").eq($(this).index()).css("border-top","2px solid #ff0036").css("border-left","1px solid #cfbfb1").css("border-right","1px solid #cfbfb1").css("color","#ff0036")
//     })
//中间--商品、规格、评价--原生js-for --方法1
var  olis=document.querySelectorAll(".buyL3_R1 .buyL3_R_change");
for(var i=0;i<olis.length;i++){
    olis[i].index=i;
    olis[i].onclick=function(){
        for(var k=0;k<olis.length;k++){
            olis[k].style.borderTop="none";
            olis[k].style.borderLeft="none";
            olis[k].style.borderRight="none";
            olis[k].style.color="#333";
            olis[k].firstElementChild.style.display="none";
        }
            this.style.borderTop="2px solid #ff0036";
            this.style.borderLeft="1px solid #cfbfb1";
            this.style.borderRight="1px solid #cfbfb1";
            this.style.color="#ff0036";
            this.firstElementChild.style.display="block"
    }
}


//中间hover  出现二维码
buyL3_R1_phone_buy.onmouseover=function(){
    phone_erwei_big.style.display="block";
}
buyL3_R1_phone_buy.onmouseout=function(){
    phone_erwei_big.style.display="none";
}


