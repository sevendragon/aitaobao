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

// 手机号码  号码验证
var pnum=document.getElementById("pnum")
var pnumtip1=document.getElementById("pnumtip1")
pnum.onblur=function(){
    var reg=/^1\d{10}$/;
    pnum_res=reg.test(this.value);
    if(!pnum_res){
        pnumtip1.innerHTML="请输入正确的手机号码";
        pnumtip1.style.color="red"
    }else{
        pnumtip1.innerHTML="输入正确";
        pnumtip1.style.color="green"
    }
}
//手机验证  验证块
var yzt1=document.getElementById("yzt1")
var yzt2=document.getElementById("yzt2")
var yak=document.getElementById("yak")
yak.onmousedown=function(ev){
    ev.preventDefault();
    document.onmousemove=function(ev){
        yak.style.left=ev.clientX-yzt1.offsetLeft+"px";
        console.log(yak.style.left)
        if(yak.offsetLeft>=258){
           yak.style.left=258+"px";
        }
        if(yak.offsetLeft<=0){
            yak.style.left=0+"px"
        }
        yzt2.style.width=yak.style.left;     
    }
    document.onmouseup=function(){
        document.onmousemove=null;
    }  
}

//button  next
var pnumnext=document.getElementById("pnumnext")
pnumnext.onclick=function(){
    if(pnum_res){
        window.open("login2.html","_blank");
    }else{
        alert("请完成所有的内容")
    }
}







