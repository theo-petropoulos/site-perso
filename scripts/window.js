$(function(){
    //On window close
    $(".window_close").click(function(e){
        e.preventDefault();
        closeWindow(e.target, 'window');
    });

    //On window minimize
    $(".window_minimize").click(function(e){
        e.preventDefault();
        let window_id="#" + $(e.target).parents(".window").attr('id');
        $(window_id).toggleClass("visible");
        $(window_id).css("animation", "minimize 0.8s 0s forwards");
    });

    //On window maximize
    $(".window_maximize").click(function(e){
        e.preventDefault();
        let window_id="#" + $(e.target).parents(".window").attr('id');
        if(!$(window_id).hasClass('fullscreen')){
            $(window_id).css({"top":0, "left":0});
            $(window_id).toggleClass("fullscreen");
            $(".window_maximize").html('<i class="far fa-window-restore"></i>');
        }
        else{
            $(window_id).css({"top": "20%", "left": "20%"});
            $(window_id).toggleClass("fullscreen");
            $(".window_maximize").html('<i class="far fa-window-maximize"></i>');
        }
    });

    //Expand window on menu double click
    $(".window_menu").dblclick(function(e){
        e.preventDefault();
        if(!$(e.target).is('button')) $(".window_maximize").trigger("click");
    });

    //On window minimized left click
    $(document).on('click', '.tb_window' , function() {
        let id= $(this).attr('id').replace('tb_window_', '');
        let window_id="#window_" + id;
        if($(window_id).css("visibility")=='hidden'){
            console.log("else if");
            $(window_id).toggleClass("invisible");
            $(window_id).css("animation", "minimize_out 0.4s 0s forwards");
        }
        else{
            console.log("else");
            $(window_id).css("animation", "minimize 0.4s 0s forwards");
            setTimeout(() => $(window_id).toggleClass("invisible"), 400);
        }
    });

    //On window minimized right click
    $(document).on('contextmenu', '.tb_window' , function(e) {
        let target=document.getElementById($(this).attr('id'));
        let classes=$(target).attr("class").split(/\s+/);
        if($("#contextmenu").length>0) $("#contextmenu").remove();
        switchClass(e, classes[0], target);
    });
});