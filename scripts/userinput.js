$(function(){
    $('.example').click(function(){
        if($(this).hasClass('color_example')){
            let style=$(this).attr('style').split(":");
            console.log(style);
            // $("*").not('.example').css({
            //     $(this).attr('style'),
            //     "border-color":"red"
            // });
        }
        else if($(this).hasClass('font_example')){
            console.log($(this).attr('style'));
        }   
        else{
            console.log('no');
        }
    });
});