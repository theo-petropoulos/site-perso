$(function(){
    $('.example').click(function(){
        let selector=$("*").not('.example');
        let id=$(this).attr('id').split('_');
        $(".folder img").each(function(){
            console.log($(this));
        });
        if($(this).hasClass('example')){
            let style=$(this).attr('style').split(":");
            if(style[0]=="font-family") selector=selector.not('i');
            selector.css(style[0],style[1]);
            if(style[0]=="color"){
                $("*").not('.example').css("border-color", style[1]);
            }
        }
        else{
            console.log('no');
        }
    });
});