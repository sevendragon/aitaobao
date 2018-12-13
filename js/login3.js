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
//正则
var zcpayw1_2=document.getElementById("zcpayw1_2")
var zcpayw2_2=document.getElementById("zcpayw2_2")
var zcpayw3_2=document.getElementById("zcpayw3_2")
var zcpayw4_2=document.getElementById("zcpayw4_2")
var zcpayw5_2=document.getElementById("zcpayw5_2")
var zcpayw6_2=document.getElementById("zcpayw6_2")

// 真实姓名
zcpayw1_2.onblur=function(){
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;
    zcpayw1_2_res=reg.test(this.value);
    if(!zcpayw1_2_res){
            tip1.innerHTML="2-4个汉字";
            tip1.style.color="red"
        }else{
            tip1.innerHTML="输入正确";
            tip1.style.color="green"
    }
}
// 身份证号
zcpayw2_2.onblur=function(){
    var reg=/^[0-9]{18}$/;
    zcpayw2_2_res=reg.test(this.value);
    if(!zcpayw2_2_res){
            tip2.innerHTML="18位数字";
            tip2.style.color="red"
        }else{
            tip2.innerHTML="输入正确";
            tip2.style.color="green"
    }
}
// 银行卡号
zcpayw3_2.onblur=function(){
    var reg=/^[0-9]{19}$/;
    zcpayw3_2_res=reg.test(this.value);
    if(!zcpayw3_2_res){
            tip3.innerHTML="19位数字";
            tip3.style.color="red"
        }else{
            tip3.innerHTML="输入正确";
            tip3.style.color="green"
    }
}
//手机号码
zcpayw4_2.onblur=function(){
    var reg=/^[0-9]{11}$/;
    zcpayw4_2_res=reg.test(this.value);
    if(!zcpayw4_2_res){
            tip4.innerHTML="请输入正确手机号码，共11位";
            tip4.style.color="red"
        }else{
            tip4.innerHTML="输入正确";
            tip4.style.color="green"
    }
}
// 设置支付宝支付密码
zcpayw5_2.onblur=function(){
    var reg=/^[a-zA-Z]\w{5,17}$/;
    zcpayw5_2_res=reg.test(this.value);
    if(!zcpayw5_2_res){
            tip5.innerHTML="6-18个字符，首位为字母";
            tip5.style.color="red"
        }else{
            tip5.innerHTML="输入正确";
            tip5.style.color="green"
    }
}
// 确认支付密码
zcpayw6_2.onblur=function(){
    zcpayw6_2_res=zcpayw5_2.value===zcpayw6_2.value
    if(!zcpayw6_2_res){
            tip6.innerHTML="与密码不一致";
            tip6.style.color="red"
        }else{
            tip6.innerHTML="输入正确";
            tip6.style.color="green"
    }
}

//button next
zcpaysure.onclick=function(){
    if(!agree.checked){
        alert("请同意条约")
    }else{
        if(zcpayw1_2_res&&zcpayw2_2_res&&zcpayw3_2_res&&zcpayw4_2_res&&zcpayw5_2_res&&zcpayw6_2_res&&agree.checked){
            alert("已经完成注册")
            window.open("login4.html","_blank");
        }else{
            alert("请完成所有内容")
        }
    }
}














