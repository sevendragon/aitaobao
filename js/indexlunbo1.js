//index轮播1-数据传输
//ajax获取后台轮播图src数据
$.ajax({
    type:'get',
    url:'php/indexdata.php',
    data:"adata=lunbo1",
    success:function(echo){
        // var cur=0;
        // var timer='';
        var a=JSON.parse(echo);
        var str='';
        $.each(a,function(index,item){
         
            str+=`
                <li> <img src="${item.src}" alt="" ></li>`
       
            })
         $('#LBpic1').append(str);
var i=0;
var timer=null;
timer=setInterval(function(){
        if(i>=7){
            LBpic1.style.left=0;
            i=0;
        }
        i++;
        move(LBpic1,"left",-520*i);
        pageColorChange()
    },5000)
function move(ele,dir,end){
        clearInterval(ele.timer)
        if(dir==="left"){
            ele.timer=setInterval(function(){
                ele.style.left=ele.offsetLeft-10+"px";
                if(ele.offsetLeft<=end){
                    ele.style.left=end+"px";
                    clearInterval(ele.timer)
                }
            })
        }else{
            ele.timer=setInterval(function(){
                ele.style.left=ele.offsetLeft+10+"px";
                if(ele.offsetLeft>=end){
                    ele.style.left=end+"px";
                    clearInterval(ele.timer)
                }
            })
        }
    }
    LB1_next.onclick=function(){
        if(i>=7){
            LBpic1.style.left=0;
            i=0;
        }
        i++;
        move(LBpic1,"left",-520*i);
        pageColorChange()
    }
    LB1_pre.onclick=function(){
        if(i<=0){
            LBpic1.style.left="-3640px";
            i=7;
        }
        i--;
        move(LBpic1,"right",-520*i);
        pageColorChange()
    }
    // move 运动函数  核心在 i 一定要在临界点 判断
    var lis=document.querySelectorAll("#LB1_page1 li");
    // 点击事件
    for(var k=0;k<lis.length;k++){
        lis[k].index=k;
        lis[k].onclick=function(){
            if(this.index>=i){
                move(LBpic1,"left",-520*this.index);
            }else{
                move(LBpic1,"right",-520*this.index);
            }
            i=this.index;
            pageColorChange()
        }
    }
    function pageColorChange(){
        for(var t=0;t<lis.length;t++){
            lis[t].style.background="#cbcbcb";
        }
        lis[i===7?0:i].style.background="#e43825";
    }
    LB1.onmouseover=function(){
        clearInterval(timer);
        // 两个箭头出现
        // LB1_next.style.opacity=1;
        // LB1_pre.style.opacity=1;
        LB1_next.style.display="block";
        LB1_pre.style.display="block";
    }
    LB1.onmouseout=function(){
        timer=setInterval(function(){
        if(i>=7){
            LBpic1.style.left=0;
            i=0;
        }
        i++;
        move(LBpic1,"left",-520*i);
        pageColorChange()
    },4000);
        // LB1_next.style.opacity=0;
        // LB1_pre.style.opacity=0;
        LB1_next.style.display="none";
        LB1_pre.style.display="none";
    }
}
        });