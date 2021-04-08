$(function(){
    window.temp=null;
    //Standards for click
    $(document).click(function(e){
        if($("#contextmenu").length>0) $("#contextmenu").remove();
        if(!$("#start_menu").hasClass('invisible') && !$(e.target).is('#start_menu')) $("#start_menu").toggleClass('invisible');
        if(!$(e.target).parents('.menu').children('.submenu').hasClass('visible')) $('.submenu.visible').toggleClass('invisible visible');
        if( !($(e.target).parents('.folder, .file') || $(e.target).hasClass('.folder, .file'))
            && $(temp).length>0 ) {
                temp.css('background', 'initial');
                temp=null;
            }
    });

    //Open start menu
    $("#start_btn").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $("#start_menu").toggleClass("invisible");
    });

    //Highlight a clickable element + remember it
    $(document).on('click', '.folder, .file', function(e){
        if($(temp).length>0) temp.css('background', 'initial');
        temp=$(this);
        temp.css("background","rgba(0,50,100,0.6)");
    });

    //Drag a file
    $(document).on('mousedown', '.drag', function(e){
        if( $(e.target).attr('id')=='music_volume'  || $(e.target).parents('.window').hasClass('fullscreen') ||  
            $(e.target).is("button") || $(e.target).is('.window_content') || $(e.target).parent().is('.window_min')){
                if($(temp).length>0 && !$(e.target).is('button')){
                    temp.css('background', 'initial');
                    temp=null;
                    $(e.target).parents('.window_group').children('.window_infos').css({
                        "background":"initial",
                        "width":"0%"
                    });
                }
                e.stopPropagation();
            }
        else{
            const thisdrag= document.getElementById($(this).attr('id'));
            $(".drag").not($(this)).css("z-index","initial")
            $(thisdrag).css("z-index", "6");
            e.preventDefault();
            let prevX= e.clientX;
            let prevY= e.clientY;
            $(document).mousemove(function(e){
                $(document).on('hover', '.drag', function(e){
                    e.preventDefault();
                    //ON HOVERING A FOLDER WHILE HOLDING DRAG ITEM
                    if($(this)!==$(e.target).parent() && $(e.target).hasClass("folder")){
                        let test=e.target.getBoundingClientRect();
                        
                        $(e.target).css("background", "red");
                    }
                }, function(){});
                const box= thisdrag.getBoundingClientRect();
                let newX = box.left - ( prevX - e.clientX ) + "px";
                let newY = box.top - ( prevY - e.clientY ) + "px";
                $(thisdrag).css({"left" : newX, "top" : newY});
                if(thisdrag.id!=='music_player' && !thisdrag.classList.contains('window')){
                    $(thisdrag).css("background","rgba(0,0,0,0.5)");
                }
                prevX= e.clientX;
                prevY= e.clientY;
            });
            $(document).mouseup(function(){
                $(thisdrag).not("#music_player, .window").css({"background":"transparent"});
                $(document).off("mousemove");
                $(".drag").not('.window').css("z-index", "initial");
                $(".drag").off("mouseenter mouseleave");
            });
        }
    });

    //Open folder on double click
    $(".folder").dblclick(function(){
        let img_src=$(this).children("img").attr("src");
        let id=$(this).attr("id").replace('folder_','');
        if($("#window_" + id).hasClass("invisible")) $("#window_" + id).toggleClass("invisible visible");
        if($("#tb_window_" + id).length<1) $("#task_windows ul").append("<li class='tb_window' id='tb_window_"+id+"'></li>");
        $("#tb_window_" + id).css({
            "background-image":"url('" + img_src + "')",
            "background-size":"contain",
            "background-position":"center",
            "background-repeat":"no-repeat"
        });
    });

    //Open file on double click
    $(".file").dblclick(function(){
        $(this).trigger('contextmenu');
        $("#contextmenu #open").trigger("click");
    });

    $(".window_view").click(function(e){
        e.preventDefault();
        
    });
});