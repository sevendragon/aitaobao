// WOMEN数据
$.ajax({
    type: "get",
    url:'php/indexdata.php',
    data:"adata=meilinvren",
    success: function (echo) {
        // var data=result;
        // var obj=data.obj;
        var cur=0;
        var timer='';
        var a=JSON.parse(echo);
        var str="";
        $.each(a,function(index,item){
            console.log(item);
            if(index===0){
                str=`
                <div class="nav3R1">
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                </div>`;
                    }else{
                str=`
                <div class="nav3R1">
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                    <li>
                        <a href="#">${item.w1}</a>
                        <img src="${item.src}" alt="">
                    </li>
                </div>`;
                }
           
        })
        
        $(".nav3R1").html(str);
    }
    // error: function () {
    //     alert("数据请求失败！")
    // }
});
