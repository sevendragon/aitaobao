/* 
* @Author: anchen
* @Date:   2018-12-13 19:00:48
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 19:05:48
*/

$('.huawei_num .num_add').click(function(){
        var num=$(this).siblings('em').html();
        if(num<10){num++};
        $(this).siblings('em').html(num);
      
        if($(this).siblings('span').prop('class')==='duihao'){
            number+=1;
            summoney+=Number($(this).siblings('i').html());
            // $('#car .sum p b').html(number);
            // $('#car .sum p strong').html(summoney);
        }
    })
    $('.huawei_num .num_reduce').click(function(){
        var num=$(this).siblings('em').html();
        if(num>1){num--};
        $(this).siblings('em').html(num);
        
        if($(this).siblings('span').prop('class')==='duihao'){
            number-=1;
            summoney-=Number($(this).siblings('i').html());
            // $('#car .sum p b').html(number);
            // $('#car .sum p strong').html(summoney);
        }
    })
    