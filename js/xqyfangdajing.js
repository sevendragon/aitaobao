
//左侧缩略图边框--mouseover&click
$("#pics_btm li").mouseover(function(){
    $("#pics_btm li img").css("border","2px solid transparent").eq($(this).index()).css("border","2px solid #000")
})
$("#pics_btm li").click(function(){
    $("#pics_btm li img").css("border","2px solid transparent").eq($(this).index()).css("border","2px solid blue")
})
// //左侧缩略图 选 上图 & 右侧大图
$("#pics_btm li").click(function(item,index){
    $(".buy_thumb_spic").css("display","none").eq($(this).index()).css("display","block");
    $("#pics_btm li img").css("border","2px solid transparent").eq($(this).index()).css("border","2px solid blue");
    $("#right_bigpics img").css("display","none").eq($(this).index()).css("display","block");
})


//放大镜
$('#pics_top_ul').mouseover(function(e){
                // $('#right_bigpics').css('display','block');
                $('#right_bigpics').css('display','block');
                $('#pic_m1').css('display','block');
        })
        //绑定鼠标在原图窗口移动的事件
        $('#pics_top_ul').mousemove(function(e){

                // 获取鼠标当前的位置
                var x=e.pageX;
                var y=e.pageY;
                // 获取原图窗口距离文档的偏移位置
                var sX=$('#pics_top_ul').offset().left;
                var sY=$('#pics_top_ul').offset().top;

                // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
                var mx=x-sX;
                var my=y-sY;

                // 获取小框框的宽高
                var mw=$('#pic_m1').width()/2;
                var mh=$('#pic_m1').height()/2;

                // 鼠标移动后小框框的移动距离
                $('#pic_m1').css({left:mx-mw+'px',top:my-mh+'px'});

                // 获取小框框的偏移位置
                    var lw=$('#pic_m1').position().left;
                    var lh=$('#pic_m1').position().top;


                // 判断边界（小框框只能在原图窗口范围内移动）
                    var maxW=$('#pics_top_ul').width()-$('#pic_m1').width()
                    var maxH=$('#pics_top_ul').height()-$('#pic_m1').height()
                    // 左边界
                    if(lw<=0){$('#pic_m1').css('left','0px');}
                    // 右边界
                    if(lw>=maxW){
                        $('#pic_m1').css('left',maxW+'px');
                    }
                    // 上边界
                    if(lh<=0){$('#pic_m1').css('top','0px');}
                    // 下边界
                    if(lh>=maxH){
                        $('#pic_m1').css('top',maxH+'px');
                    }

                    // 获取小框框的偏移位置
                    var lw=$('#pic_m1').position().left;
                    var lh=$('#pic_m1').position().top;
                // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
                    var newX=lw*2.5;
                    var newY=lh*2.5;



                $('#right_bigpics img').css({left:-newX+'px',top:-newY+'px'});
        })
        //绑定鼠标离开原图窗口事件
        $('#pics_top_ul').mouseout(function(){
                $('#pic_m1').css('display','none');
                $('#right_bigpics').css('display','none');
        })




// buyL1_1放大镜&&&拖拽
// var pics_top=$("#pics_top")[0];
// var pic_m1=$("#pic_m1")[0];
// var bigimg=$("#right_bigpics img")[0];
// $("#pic_m1").on("mousemove",function(){
//     $("#right_bigpics").css("display","block")
// })
// pic_m1.onmousedown=function(ev){
//     ev.preventDefault();
//     var x=ev.offsetX;
//     var y=ev.offsetY;
//     document.onmousemove=function(ev){
//         pic_m1.style.left=ev.pageX-pics_top_ul.offsetLeft-x-x+"px"
//         pic_m1.style.top=ev.pageY-pics_top_ul.offsetTop-y-y-y+"px" 
//          if(pic_m1.offsetLeft<=0){
//              pic_m1.style.left=0;
//          }
//          if(pic_m1.offsetTop<=0){
//              pic_m1.style.top=0;
//          }
//          if(pic_m1.offsetLeft>=pics_top.offsetWidth-pic_m1.offsetWidth){
//              pic_m1.style.left=pics_top.offsetWidth-pic_m1.offsetWidth+"px";
//          }
//          if(pic_m1.offsetTop>=pics_top.offsetHeight-pic_m1.offsetHeight){
//              pic_m1.style.top=pics_top.offsetHeight-pic_m1.offsetHeight+"px";
//          }
//          // $("#right_bigpics img")[0].css("left","-x+'px'")
//          // $("#right_bigpics img")[0].css("top","-y+'px'")
//          bigimg.style.left=-x*3+"px";
//          bigimg.style.top=-y*3+"px";
//     }
//     document.onmouseup=function(){
//                 document.onmousemove=null;
//             }
//     // $("#right_bigpics img")[0].css("left","-x+'px'")
//     // $("#right_bigpics img")[0].css("top","-y+'px'")
//     // bigimg.style.left=-x+"px";
//     // bigimg.style.top=-y+"px";
// }
// $("#pics_top").mouseout(function(){
//     $("#right_bigpics img").css("display","none");
// })
// $("#pics_top").mouseover(function(){
//     $("#right_bigpics img").css("display","block");
// })




