// 有问题找小蜜
xiaomiz.onmousedown=function(ev){
    var x=ev.offsetX;
    var y=ev.offsetY;
    document.onmousemove=function(ev){
        xiaomiz.style.left=ev.pageX-x+"px"
        xiaomiz.style.top=ev.pageY-y+"px"
        if(xiaomiz.offsetLeft<=0){
                    xiaomiz.style.left=0;
                }
        if(xiaomiz.offsetTop<=0){
            xiaomiz.style.top=0;
        }
        if(xiaomiz.offsetLeft>=document.documentElement.clientWidth-xiaomiz.offsetWidth){           
                    xiaomiz.style.left=document.documentElement.clientWidth-xiaomiz.offsetWidth+"px"
                }
                //下边
                if(xiaomiz.offsetTop>=document.documentElement.clientHeight-xiaomiz.offsetHeight){            
                    xiaomiz.style.top=document.documentElement.clientHeight-xiaomiz.offsetHeight+"px"
                }
    }
     document.onmouseup=function(){
                document.onmousemove=null;
            }
}
//跳转主页面
setTimeout(function(){
    window.open("../index.html","_self");
},3000)