//index轮播2-数据传输
//ajax获取后台轮播图src数据
$.ajax({
    type:'get',
    url:'php/indexdata.php',
    data:"adata=lunbo2",
    success:function(echo){
        
        var a=JSON.parse(echo);
        var str='';
        $.each(a,function(index,item){
            
           str+=`<li>
                                <img src="${item.src}" alt="">
                                <div class="LB2_w">
                                    <h2>${item.w1}</h2>
                                    <h3>${item.w2}</h3>
                                </div>
                           </li>`

        });
        $('#LBpic2').append(str);
}
})