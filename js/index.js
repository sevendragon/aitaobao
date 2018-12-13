//搜索框设置
var tbindex_search=document.getElementById("tbindex_search");
var search_content=document.getElementById("search_content");
tbindex_search.onkeyup=function(){
    var s=document.createElement("script");
    s.src="https://suggest.taobao.com/sug?code=utf-8&q="+tbindex_search.value+"&_ksTS=1542866740021_6609&callback=fn&k=1&area=c2c&bucketid=4";
    document.getElementsByTagName("head")[0].appendChild(s);
    document.getElementsByTagName("head")[0].removeChild(s);
}
function fn(data){
     var res=data.result;
    console.log(data.result);
     var str="";
     res.forEach(item=>{
         str+=`<li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${item[0]}&suggest=0_2&_input_charset=utf-8&wq=e&suggest_query=e&source=suggest">${item[0]}</a></li>`
         //  tbindexSousuo.onclick=function(){
         //  var net=https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${item[0]}&suggest=0_2&_input_charset=utf-8&wq=e&suggest_query=e&source=suggest
         //        window.open(net,"_self")
         // }
     })
    search_content.innerHTML=str;   
 }

 // nav1L--women--hover
 women_nav1L.onmouseover=function(){
    womenL_nav1L.style.background="#ff3376";
    womenL_nav1L.style.color="#fff";
    womenR_nav1L.style.borderTop="2px solid #ff3376";
    womenR_nav1L.style.borderBottom="2px solid #ff3376";
    womenR_nav1L.style.borderRight="2px solid #fff";
    women_hover.style.display="block";
 }
 women_nav1L.onmouseout=function(){
    womenL_nav1L.style.background="#eee";
    womenL_nav1L.style.color="#fd6cb3";
    womenR_nav1L.style.borderTop="1px solid #eee";
    womenR_nav1L.style.borderBottom="1px solid #eee";
    womenR_nav1L.style.borderRight="1px solid #eee";
    women_hover.style.display="none";
 }
// nav1L--men--hover
 men_nav1L.onmouseover=function(){
    menL_nav1L.style.background="#43b4ee";
    menL_nav1L.style.color="#fff";
    menR_nav1L.style.borderTop="2px solid #43b4ee";
    menR_nav1L.style.borderBottom="2px solid #43b4ee";
    menR_nav1L.style.borderRight="4px solid #fff";
    men_hover.style.display="block";
 }
 men_nav1L.onmouseout=function(){
    menL_nav1L.style.background="#eee";
    menL_nav1L.style.color="#77c1e9";
    menR_nav1L.style.borderTop="1px solid #eee";
    menR_nav1L.style.borderBottom="1px solid #eee";
    menR_nav1L.style.borderRight="1px solid #eee";
    men_hover.style.display="none";
 }
// nav1L--shuma--hover
 shuma_nav1L.onmouseover=function(){
    shumaL_nav1L.style.background="#6679d9";
    shumaL_nav1L.style.color="#fff";
    shumaR_nav1L.style.borderTop="2px solid #6679d9";
    shumaR_nav1L.style.borderBottom="2px solid #6679d9";
    shumaR_nav1L.style.borderRight="4px solid #fff";
    shuma_hover.style.display="block";
 }
 shuma_nav1L.onmouseout=function(){
    shumaL_nav1L.style.background="#eee";
    shumaL_nav1L.style.color="#6c7ac2";
    shumaR_nav1L.style.borderTop="1px solid #eee";
    shumaR_nav1L.style.borderBottom="1px solid #eee";
    shumaR_nav1L.style.borderRight="1px solid #eee";
    shuma_hover.style.display="none";
 }
// nav1L--baby--hover
 baby_nav1L.onmouseover=function(){
    babyL_nav1L.style.background="#fa4b68";
    babyL_nav1L.style.color="#fff";
    babyR_nav1L.style.borderTop="2px solid #fa4b68";
    babyR_nav1L.style.borderBottom="2px solid #fa4b68";
    babyR_nav1L.style.borderRight="4px solid #fff";
    baby_hover.style.display="block";
 }
 baby_nav1L.onmouseout=function(){
    babyL_nav1L.style.background="#eee";
    babyL_nav1L.style.color="#ec244b";
    babyR_nav1L.style.borderTop="1px solid #eee";
    babyR_nav1L.style.borderBottom="1px solid #eee";
    babyR_nav1L.style.borderRight="1px solid #eee";
    baby_hover.style.display="none";
 }
// nav1L--jiaju--hover
 jiaju_nav1L.onmouseover=function(){
    jiajuL_nav1L.style.background="#95c829";
    jiajuL_nav1L.style.color="#fff";
    jiajuR_nav1L.style.borderTop="2px solid #95c829";
    jiajuR_nav1L.style.borderBottom="2px solid #95c829";
    jiajuR_nav1L.style.borderRight="4px solid #fff";
    jiaju1_hover.style.display="block";
 }
 jiaju_nav1L.onmouseout=function(){
    jiajuL_nav1L.style.background="#eee";
    jiajuL_nav1L.style.color="#779f24";
    jiajuR_nav1L.style.borderTop="1px solid #eee";
    jiajuR_nav1L.style.borderBottom="1px solid #eee";
    jiajuR_nav1L.style.borderRight="1px solid #eee";
    jiaju1_hover.style.display="none";
 }
// nav1L--food--hover
 food_nav1L.onmouseover=function(){
    foodL_nav1L.style.background="#e3751e";
    foodL_nav1L.style.color="#fff";
    foodR_nav1L.style.borderTop="2px solid #e3751e";
    foodR_nav1L.style.borderBottom="2px solid #e3751e";
    foodR_nav1L.style.borderRight="4px solid #fff";
    food_hover.style.display="block";
 }
 food_nav1L.onmouseout=function(){
    foodL_nav1L.style.background="#eee";
    foodL_nav1L.style.color="#e37722";
    foodR_nav1L.style.borderTop="1px solid #eee";
    foodR_nav1L.style.borderBottom="1px solid #eee";
    foodR_nav1L.style.borderRight="1px solid #eee";
    food_hover.style.display="none";
 }
// nav1L--meiz--hover
 meiz_nav1L.onmouseover=function(){
    meizL_nav1L.style.background="#f67d23";
    meizL_nav1L.style.color="#fff";
    meizR_nav1L.style.borderTop="2px solid #f67d23";
    meizR_nav1L.style.borderBottom="2px solid #f67d23";
    meizR_nav1L.style.borderRight="4px solid #fff";
    meiz_hover.style.display="block";
 }
 meiz_nav1L.onmouseout=function(){
    meizL_nav1L.style.background="#eee";
    meizL_nav1L.style.color="#c64adc";
    meizR_nav1L.style.borderTop="1px solid #eee";
    meizR_nav1L.style.borderBottom="1px solid #eee";
    meizR_nav1L.style.borderRight="1px solid #eee";
    meiz_hover.style.display="none";
 }
// nav1L--xbao--hover
 xbao_nav1L.onmouseover=function(){
    xbaoL_nav1L.style.background="#f29e61";
    xbaoL_nav1L.style.color="#fff";
    xbaoR_nav1L.style.borderTop="2px solid #f29e61";
    xbaoR_nav1L.style.borderBottom="2px solid #f29e61";
    xbaoR_nav1L.style.borderRight="4px solid #fff";
    xbao_hover.style.display="block";
 }
 xbao_nav1L.onmouseout=function(){
    xbaoL_nav1L.style.background="#eee";
    xbaoL_nav1L.style.color="#db8e5a";
    xbaoR_nav1L.style.borderTop="1px solid #eee";
    xbaoR_nav1L.style.borderBottom="1px solid #eee";
    xbaoR_nav1L.style.borderRight="1px solid #eee";
    xbao_hover.style.display="none";
 }

// 轮播图1
// var i=0;
// var timer=null;
// timer=setInterval(function(){
//         if(i>=7){
//             LBpic1.style.left=0;
//             i=0;
//         }
//         i++;
//         move(LBpic1,"left",-520*i);
//         pageColorChange()
//     },5000)
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
//     LB1_next.onclick=function(){
//         if(i>=7){
//             LBpic1.style.left=0;
//             i=0;
//         }
//         i++;
//         move(LBpic1,"left",-520*i);
//         pageColorChange()
//     }
//     LB1_pre.onclick=function(){
//         if(i<=0){
//             LBpic1.style.left="-3640px";
//             i=7;
//         }
//         i--;
//         move(LBpic1,"right",-520*i);
//         pageColorChange()
//     }
//     // move 运动函数  核心在 i 一定要在临界点 判断
//     var lis=document.querySelectorAll("#LB1_page1 li");
//     // 点击事件
//     for(var k=0;k<lis.length;k++){
//         lis[k].index=k;
//         lis[k].onclick=function(){
//             if(this.index>=i){
//                 move(LBpic1,"left",-520*this.index);
//             }else{
//                 move(LBpic1,"right",-520*this.index);
//             }
//             i=this.index;
//             pageColorChange()
//         }
//     }
//     function pageColorChange(){
//         for(var t=0;t<lis.length;t++){
//             lis[t].style.background="#cbcbcb";
//         }
//         lis[i===7?0:i].style.background="#e43825";
//     }
//     LB1.onmouseover=function(){
//         clearInterval(timer);
//         // 两个箭头出现
//         // LB1_next.style.opacity=1;
//         // LB1_pre.style.opacity=1;
//         LB1_next.style.display="block";
//         LB1_pre.style.display="block";
//     }
//     LB1.onmouseout=function(){
//         timer=setInterval(function(){
//         if(i>=7){
//             LBpic1.style.left=0;
//             i=0;
//         }
//         i++;
//         move(LBpic1,"left",-520*i);
//         pageColorChange()
//     },4000);
//         // LB1_next.style.opacity=0;
//         // LB1_pre.style.opacity=0;
//         LB1_next.style.display="none";
//         LB1_pre.style.display="none";
//     }


// 轮播图2
var i1=0;
var timer1=null;
timer1=setInterval(function(){
        if(i1>=3){
            LBpic2.style.left=0;
            i1=0;
        }
        i1++;
        move(LBpic2,"left",-210*i1);
    },4000)
    LB2_next.onclick=function(){
        if(i1>=3){
            LBpic1.style.left=0;
            i1=0;
        }
        i1++;
        move(LBpic2,"left",-210*i1);
    }
    LB2_pre.onclick=function(){
        if(i1<=0){
            LBpic2.style.left="-630px";
            i1=3;
        }
        i1--;
        move(LBpic2,"right",-210*i1);
    }
    LB2.onmouseover=function(){
        clearInterval(timer1);
        // 两个箭头出现
        LB2_next.style.display="block";
        LB2_pre.style.display="block";
    }
    LB2.onmouseout=function(){
        timer1=setInterval(function(){
        if(i1>=3){
            LBpic2.style.left=0;
            i1=0;
        }
        i1++;
        move(LBpic2,"left",-210*i1);
    },4000);
        LB2_next.style.display="none";
        LB2_pre.style.display="none";
    }

// nav2R 轮播淘宝折扣R
var tbzhekou=document.getElementById("tbzhekou")
var izk=0;
var timerizk=null;
timerizk=setInterval(function(){
        if(izk>=4){
            tbzhekou.style.left=0;
            izk=0;
        }
        izk++;
        movezk(tbzhekou,"left",-940*izk);
        pageColorChangezk();
    },5000)
function movezk(ele,dir,end){
        clearInterval(ele.timerzk)
        if(dir==="left"){
            ele.timerzk=setInterval(function(){
                ele.style.left=ele.offsetLeft-10+"px";
                if(ele.offsetLeft<=end){
                    ele.style.left=end+"px";
                    clearInterval(ele.timerzk)
                }
            })
        }else{
            ele.timerzk=setInterval(function(){
                ele.style.left=ele.offsetLeft+10+"px";
                if(ele.offsetLeft>=end){
                    ele.style.left=end+"px";
                    clearInterval(ele.timerzk)
                }
            })
        }
    }
    var liszk=document.querySelectorAll("#zhekou_page li");
    // 点击事件
    for(var kzk=0,lzk=liszk.length;kzk<lzk;kzk++){
        liszk[kzk].index=kzk;
        liszk[kzk].onclick=function(){
            if(this.index>=izk){
                movezk(tbzhekou,"left",-940*this.index);
            }else{
                movezk(tbzhekou,"right",-940*this.index);
            }
            izk=this.index;
            pageColorChangezk()
        }
    }
    function pageColorChangezk(){
        for(var tzk=0,lzk2=liszk.length;tzk<lzk2;tzk++){
            liszk[tzk].style.background="#cbcbcb";
        }
        liszk[izk===5?0:izk].style.background="#e43825";
    }

// 右侧侧边栏-交话费
    var asideRW2_div=document.getElementById("asideRW2_div");
    var asideRW1_div=document.getElementById("asideRW1_div");
    var asideRW2_pay=document.getElementById("asideRW2_pay");
    // var asideRW1_div=document.querySelectorAll("#asideRW1_div");
    // var asideRW2_div=document.querySelectorAll("#asideRW2_div");
    // asideRW1_div.onclick=function(){
    //     window.open("html/load1.html")
    // }
    // asideRW2_div.onmouseover=function(){
    //     asideRW2_pay.style.display="block";
    //     asideRW2_pay.style.color="#666"
    // }
    // setTimeout(()=>{
    //     asideRW2_div.onmouseout=function(){
    //         asideRW2_pay.style.display="none";
    //     }
    // },700)

//asideR
// var asideR=document.querySelectorAll("asideR")
// asideR.onmouseover=function(){
//     console.log(11)
// }
// var asideRW1_div=document.getElementById("asideRW1_div");
// var asideRW2_div=document.getElementById("asideRW2_div");
// var asideRW3_div=document.getElementById("asideRW3_div");
// var asideRW4_div=document.getElementById("asideRW4_div");
// console.log(asideRW1_div)
// asideRW1_div.onmouseover=function(){
//     asideRW1_div.style.background="fa4333";
//     asideRW1_div.innerHTML="我的淘宝";
//     asideRW1_div.style.color="#fff";
// }
// asideRW1_div.onmouseout=function(){
//     asideRW1_div.style.background="#fff";
// }
