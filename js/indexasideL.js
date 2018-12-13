// 左边侧边栏效果--楼层
var lisasideL=document.querySelectorAll("#asideL div");
window.onscroll=function(){
    if(document.documentElement.scrollTop>550){
        asideL.style.display="block";
    }else{
        asideL.style.display="none";
    }
}
lisasideL.onmouseover=function(){
    lisasideL.style.color="#f03a26"
}
lisasideL.onmousout=function(){
    lisasideL.style.color="#333"
}
var timer=null;
for(var m=0;m<lisasideL.length;m++){
      lisasideL[m].index=m;
      lisasideL[m].onclick=function(){
              // 判断 向上还是向下
            if((450*this.index+600)>=document.documentElement.scrollTop){
                layerMove("bottom",(450*this.index+600))
            }else{
                layerMove("top",(450*this.index+600))
            }   
            // 改变楼层颜色
            for(var n=0,len=lisasideL.length;n<len;n++){
                lisasideL[n].style.background="#fff";
                lisasideL[n].style.border="1px solid #eee";
                lisasideL[n].style.color="#333";
            }
            lisasideL[this.index].style.background="#fff3f2";
            lisasideL[this.index].style.border="1px solid #f03a26";
            lisasideL[this.index].style.color="#f03a26";
      }
  }


  function layerMove(dir,end){
     clearInterval(timer);
     if(dir==="top"){
        timer=setInterval(function(){
            document.documentElement.scrollTop=document.documentElement.scrollTop-10;
            if(document.documentElement.scrollTop<=end){
                document.documentElement.scrollTop=end;
                clearInterval(timer)
            }
         })
     }else{
        timer=setInterval(function(){
            document.documentElement.scrollTop=document.documentElement.scrollTop+10;
            if(document.documentElement.scrollTop>=end){
                document.documentElement.scrollTop=end;
                clearInterval(timer)
            }
         }) 
     }
 }
 