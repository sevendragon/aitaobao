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

//button
var zcxxsure=document.getElementById("zcxxsure")
var zcxxw1_2=document.getElementById("zcxxw1_2")
var zcxxw2_2=document.getElementById("zcxxw2_2")
var zcxxw3_2=document.getElementById("zcxxw3_2")
var zcxxw4_2=document.getElementById("zcxxw4_2")
var zcxxw5_2=document.getElementById("zcxxw5_2")
// 登录名
zcxxw1_2.onblur=function(){
    var reg=/^[a-zA-Z]\w{5,17}$/;
    zcxxw1_2_res=reg.test(this.value);
    if(!zcxxw1_2_res){
            tip1.innerHTML="6-18个字符，首位为字母";
            tip1.style.color="red"
        }else{
            tip1.innerHTML="输入正确";
            tip1.style.color="green"
    }
}
// 设置登陆密码
zcxxw3_2.onblur=function(){
    var reg=/^[a-zA-Z0-9]{6,16}$/;
    zcxxw3_2_res=reg.test(this.value);
    if(!zcxxw3_2_res){
            tip2.innerHTML="至少6个字符，可以是数字和字母";
            tip2.style.color="red"
        }else{
            tip2.innerHTML="输入正确";
            tip2.style.color="green"
    }
}
// 确认密码
zcxxw4_2.onblur=function(){
    zcxxw4_2_res=zcxxw3_2.value===zcxxw4_2.value
    if(!zcxxw4_2_res){
            tip3.innerHTML="与密码不一致";
            tip3.style.color="red"
        }else{
            tip3.innerHTML="输入正确";
            tip3.style.color="green"
    }
}
// 设置昵称
zcxxw5_2.onblur=function(){
    var reg=/^[a-zA-Z]\w{5,17}$/;
    zcxxw5_2_res=reg.test(this.value);
    if(!zcxxw5_2_res){
            tip4.innerHTML="6-18个字符，首位为字母";
            tip4.style.color="red"
        }else{
            tip4.innerHTML="输入正确";
            tip4.style.color="green"
    }
}
//button next
zcxxsure.onclick=function(){
    if(zcxxw1_2_res&&zcxxw3_2_res&&zcxxw4_2_res&&zcxxw5_2_res){
        window.open("login3.html","_blank");
    }else{
        alert("请完成所有的内容")
    }
}









