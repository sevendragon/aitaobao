<?php
$adata=$_GET["adata"];
$lunbo1='[{"src":"images/indexdata4.jpg"},{"src":"images/indexdata2.jpg"},{"src":"images/indexdata3.jpg"},{"src":"images/indexdata4.jpg"},{"src":"images/indexdata5.jpg"},{"src":"images/indexdata6.jpg"},{"src":"images/indexdata7.jpg"},{"src":"images/indexdata8.jpg"}]';

$lunbo2='[{"src":"images/nav2R7.jpg","w1":"靓丽指甲","w2":"你值得拥有"},{"src":"images/nav2R8.jpg","w1":"精致裤子","w2":"弹力无限"},{"src":"images/nav3person2.jpg","w1":"精美外衣","w2":"可爱动人"},{"src":"images/nav2R5.jpg","w1":"钱包","w2":"你值得拥有"}]';

// $meilinvren='[{"w1":"美女","src":"../images/nav3person2.jpg"},{"w1":"美女","src":"../images/nav3person2.jpg"},{"w1":"美女","src":"../images/nav3person2.jpg"},{"w1":"美女","src":"../images/nav3person2.jpg"},{"w1":"美女","src":"../images/nav3person2.jpg"},{"w1":"美女","src":"../images/nav3person2.jpg"},{"w1":"美女","src":"../images/nav3person2.jpg"},{"w1":"美女","src":"../images/nav3person2.jpg"}]';

$meilinvren='[{"w1":"帅哥","src":"images/indexdata2_1.jpg"},{"w1":"帅哥","src":"images/indexdata2_1.jpg"},{"w1":"帅哥","src":"images/indexdata2_1.jpg"},{"w1":"帅哥","src":"images/indexdata2_1.jpg"},{"w1":"帅哥","src":"images/indexdata2_1.jpg"},{"w1":"帅哥","src":"images/indexdata2_1.jpg"},{"w1":"帅哥","src":"images/indexdata2_1.jpg"},{"w1":"帅哥","src":"images/indexdata2_1.jpg"}]';

if($adata=="lunbo1"){
    echo $lunbo1;
}else if($adata=="lunbo2"){
    echo $lunbo2;
}else if($adata=="meilinvren"){
    echo $meilinvren;
}
?>
