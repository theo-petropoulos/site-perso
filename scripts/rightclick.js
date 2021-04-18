$(function(){
    //Actions on right click
    $(document).on('contextmenu', function(e){
        if($(e.target).not('textarea')) e.preventDefault();
    });

    //When a "left-clickable" element is clicked
    $('.rclick').on('contextmenu', function(e){
        let target=document.getElementById($(this).attr('id'));
        $(target).not('.window_min').css("background","rgba(0,0,0,0.5)");
        let classes=$(target).attr("class").split(/\s+/);
        if($("#contextmenu").length>0) $("#contextmenu").remove();
        switchClass(e, classes[0], target);
    });
});