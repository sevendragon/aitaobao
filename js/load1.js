jumpaitaobao.onclick=function(){
    window.open("../index.html","_self");
}
lianindex.onclick=function(){
    window.open("../html/login1.html","_self");
}

load1.onclick=function(){
    var ajax=new XMLHttpRequest();
    ajax.open("post","../php/load1.php",true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send("user="+username.value+"&password="+password.value);
    ajax.onreadystatechange=function(){
           if(ajax.readyState===4&&ajax.status===200){
              console.log(ajax.responseText)
              var res=JSON.parse(ajax.responseText).code;
              if(res===0){
                  alert("用户名不存在")
               }else if(res===1){
                  alert("密码错误")
               }else if(res===2){
                  alert("登录成功");
                  window.open("../index.html","_self")
               }            
           }
        }
    }

// 密码二维码登录方式跳转
R_erweima.onclick=function(){
    erweimaload.style.display="block";
    mimaload.style.display="none";
    R_computer.style.display="block"
    R_erweima.style.display="none";
}
R_computer.onclick=function(){
    mimaload.style.display="block";
    erweimaload.style.display="none";
    R_erweima.style.display="block";
    R_computer.style.display="none";
}

ewmpic.onmousemove=function(){
    ewmpic.style.left="35px"
    phonesaoyisao.style.display="block";
}
ewmpic.onmouseout=function(){
    phonesaoyisao.style.display="none";
    ewmpic.style.left="105px"
}



