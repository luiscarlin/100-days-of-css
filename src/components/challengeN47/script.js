// jQuery v3.3.1 is supported
$(function(){
    for (i = 0; i < 20*20; i++) {
        $(".grid").append("<span class='box'></span>");
    }

    $(".grid").on('click','.box',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    })
    })