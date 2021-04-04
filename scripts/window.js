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

    //On window minimize'out
    $(document).on('click', '.tb_window' , function() {
        let id= $(this).attr('id').replace('tb_window_', '');
        let window_id="#window_" + id;
        if($(window_id).css("visibility")=='hidden'){
            $(window_id).css("animation", "minimize_out 0.4s 0s forwards");
            $(window_id).toggleClass("visible");
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