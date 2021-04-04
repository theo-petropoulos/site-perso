$(function(){
    //Standards for click
    $(document).click(function(e){
        e.preventDefault();
        if($("#contextmenu").length>0) $("#contextmenu").remove();
        if(!$("#start_menu").hasClass('invisible') && !$(e.target).is('#start_menu')) $("#start_menu").toggleClass('invisible');
    });

    //Open start menu
    $("#start_btn").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $("#start_menu").toggleClass("invisible");
    });

    //Drag a file
    $(".drag").not($(this).has('input')).mousedown(function(e){
        if( $(e.target).attr('id')=='music_volume' || 
            $(e.target).is("button") || $(e.target).is('.window_content') ) 
            e.stopPropagation();
        else{
            const thisdrag= document.getElementById($(this).attr('id'));
            $(thisdrag).css("z-index", "10");
            e.preventDefault();
            let prevX= e.clientX;
            let prevY= e.clientY;
            $(document).mousemove(function(e){
                $(thisdrag).css("z-index", "10");
                $(".drag").hover(function(e){
                    if($(this)!==$(e.target).parent() && $(e.target).hasClass("folder")){
                        //ON HOVERING A FOLDER
                        //$(e.target).css("background", "red");
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
                $(thisdrag).css({"z-index":"initial"});
                $(document).off("mousemove");
                $(".drag").off("mouseenter mouseleave");
            });
        }
    });

    $(".folder").dblclick(function(e){
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

    $("button#open").click(function(e){
        e.preventDefault();
        console.log("$this = " + $(this) + " - this = " + this + " - $thisparent = " + $(this).parent());
    });
});