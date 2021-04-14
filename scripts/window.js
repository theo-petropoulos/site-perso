$(function(){
    //On window close
    $(".window_close").click(function(e){
        e.preventDefault();
        closeWindow($(e.target).parents('.window').attr('id'));
    });

    //On window minimize
    $(".window_minimize").click(function(e){
        e.preventDefault();
        let window_id="#" + $(e.target).parents(".window").attr('id');
        $(window_id).toggleClass("visible");
        $(window_id).css("animation", "minimize 0.8s 0s forwards");
    });

    //On window maximize
    $(document).on('click', ".window_maximize", function(e){
        e.preventDefault();
        let window_id="#" + $(e.target).parents(".window").attr('id');
        if(!$(window_id).hasClass('fullscreen')){
            $(window_id).css({"top":0, "left":0});
            $(window_id).toggleClass("fullscreen");
            $(window_id + " .window_maximize").html('<i class="far fa-window-restore"></i>');
        }
        else{
            $(window_id).css({"top": "20%", "left": "20%"});
            $(window_id).toggleClass("fullscreen");
            $(window_id + " .window_maximize").html('<i class="far fa-window-maximize"></i>');
        }
    });

    //Expand window on menu double click
    $(document).on('dblclick', '.window_menu', function(e){
        e.preventDefault();
        if(!$(e.target).is('span, button')){
            let maximize_window="#" + $(e.target).parents(".window").attr('id') + " .window_maximize";
            if(!$(e.target).is('button')) $(maximize_window).trigger("click");
        }
    });

    //On window minimized left click
    $(document).on('click', '.tb_window' , function() {
        let id= $(this).attr('id').replace('tb_window_', '');
        let window_id="#window_" + id;
        if($(window_id).css("visibility")=='hidden'){
            $(window_id).toggleClass("invisible");
            $(window_id).css("animation", "minimize_out 0.4s 0s forwards");
        }
        else{
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

    //Show details of a project
    $(document).on('click', '.project_min', function(e){
        e.preventDefault();
        let article='#article_' + $(this).attr('id');
        $(this).parents('.window_group').children('.window_infos').css({
            "width":"70%",
            "background":"rgba(0,0,0,0.8)"
        });
        $(article).toggleClass('invisible');
    });

    $("#close_corporations").click(function(){
        $(this).parents('.animation').remove();
    });

    //Open submenu
    $('.menu button').click(function(e){
        e.preventDefault();
        if($('.submenu.visible')) $('.submenu.visible').toggleClass('invisible visible');
        let thisorigin=$(this).parents('.menu').children('.submenu');
        thisorigin.toggleClass("invisible visible");
    });

    //Clicking a submenu item
    $('.submenu_item').click(function(e){
        e.preventDefault();
        let thisid = '#' + $(this).parents('.window').attr('id');
        let window_content = thisid + ' .window_content';
        let window_min = window_content + ' .window_min';
        let window_folder = window_content + ' .folder';
        let window_min_img = window_min + ' img';
        let window_folder_img = window_folder + ' img';
        switch($(this).attr('id')){
            case 'file_open':
                if($(temp).length>0){
                    $(temp).trigger('contextmenu');
                    $("#contextmenu #open").trigger("click");
                }
                break;
            case 'view_list':
                $(window_content).css({
                    "flex-flow":"column"
                });
                $(window_min).add(window_folder).css({
                    "width":"100%",
                    "display":"flex",
                    "flex-flow": "row",
                    "justify-content":"flex-start",
                    "border-bottom":"2px solid rgba(255,255,255,0.3)"
                });
                $(window_min_img).add(window_folder_img).css({
                    "margin-right":"5%"
                });
                break;
            case 'view_icons':
                $(window_content).css({
                    "flex-flow":"row"
                });
                $(window_min).add(window_folder).css({
                    "width":"initial",
                    "display":"flex",
                    "flex-flow": "column",
                    "justify-content":"center",
                    "align-items":"center",
                    "border-bottom":"none"
                });
                $(window_min_img).add(window_folder_img).css({
                    "margin-right":"initial"
                });
                break;
            default:break;
        }
    });
});