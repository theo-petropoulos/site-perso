$(function(){
    $('.example').click(function(){
        let selector=$("*").not('.example');
        let id=$(this).attr('id').split('_');
        if($(this).hasClass('example')){
            let style=$(this).attr('style').split(":");
            if(style[0]=="font-family"){
                selector=selector.not('i');
                font=style[1];
            }
            selector.css(style[0],style[1]);
            if(style[0]=="color"){
                color=Object.keys(array_colors).find(key => array_colors[key] === style[1]);
                $("*").not('.example').css("border-color", style[1]);
                $(".folder img").add($(".project_min img")).each(function(){
                    let src=$(this).attr('src').replace('.png', '').split('_');
                    $(this).attr('src', src[0].concat('_', id[1], '.png'));
                });
                $(".tb_window").each(function(){
                    let tbimg = $(this).css("background-image").replace('.png', '').split('_');
                    $(this).css("background-image", tbimg[0] + '_' + color + '.png');
                });
            }
        }
    });

    $('.effects_switch').click(function(){
        let prev_bg=$("#screen_on").css("background-image").split("backgrounds/");
        let background=prev_bg[1].replace(/%20/g, " ").replace('")', '');
        if($(this).attr('id')=='effects_off'){
            power='switch_off';
            $("#screen_on").css("background-image", "url('assets/images/backgrounds/" + background + "')");
            window.background=$("#screen_on").css("background-image");
        }
        else if($(this).attr('id')=='effects_on'){
            power='on';
            $("#screen_on").css("background-image", "radial-gradient(circle, rgba(40,57,20,0.45) 0%, rgba(20,29,9,0.8) 80%, rgba(0,0,0,0.99) 100%), url('assets/images/backgrounds/" + background + "')");
            window.background=$("#screen_on").css("background-image");
        }
    });
});