$(function(){
    //Actions on right click
    $(document).contextmenu(function(e){
        e.preventDefault();
    });

    //When a "left-clickable" element is clicked
    $(document).on('contextmenu', '.rclick', function(e){
        let target=document.getElementById($(this).attr('id'));
        $(target).not('.window_min').css("background","rgba(0,0,0,0.5)");
        let classes=$(target).attr("class").split(/\s+/);
        if($("#contextmenu").length>0) $("#contextmenu").remove();
        switchClass(e, classes[0], target);
    });
});