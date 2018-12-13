<?php
$a=$_POST["user"];
$b=$_POST["password"];
$arr=array("aa","bb","cc","dd");
$arr2=array("aa"=>"11","bb"=>"22","cc"=>"33","dd"=>"44");
if(in_array($a,$arr)){
    if($arr2[$a]==$b){
        echo '{"code":2}';
    }else{
        echo '{"code":1}';
    }
}else{
    echo '{"code":0}';
}
?>
