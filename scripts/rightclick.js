$(function(){
    //Actions on right click
    $(document).contextmenu(function(e){
        e.preventDefault();
    });

    //When a "left-clickable" element is clicked
    $(".rclick").contextmenu(function(e){
        let target=document.getElementById($(this).attr('id'));
        $(target).css("background","rgba(0,0,0,0.5)");
        let classes=$(target).attr("class").split(/\s+/);
        if($("#contextmenu").length>0) $("#contextmenu").remove();
        switchClass(e, classes[0], target);
    });
});

function switchClass(e, fclass, target){
    switch(fclass){
        case 'folder':
            let string="<div id='contextmenu'>\
                <ul>\
                    <li><button id='open'><p lang='fr'>Ouvrir</p></button></li>\
                    <li><button id='copy'><p lang='fr'>Copier</p></button></li>\
                    <li><button id='cut'><p lang='fr'>Coller</p></button></li>\
                    <li><button id='rename'><p lang='fr'>Renommer</p></button></li>\
                    <li><button id='delete'><p lang='fr'>Supprimer</p></button></li>\
                </ul>\
                </div>";
            $(target).append(string);
            const box= target.getBoundingClientRect();
            let left= e.clientX - box.left + "px";
            let top= e.clientY - box.top + "px";
            $("#contextmenu").css({"top": top, "left": left});
            $("button").click(function(e){
                e.preventDefault();
                switch($(this).attr('id')){
                    case 'open':
                        let id=$(this).parents(".folder").attr("id").replace('folder_','');
                        if($("#window_" + id).hasClass("invisible")) $("#window_" + id).toggleClass("invisible visible");
                        $("#task_windows ul").append("<li id='tb_"+id+"'>" + id + "</li>");
                        break;
                    case 'copy':
                        break;
                    case 'cut':
                        break;
                    case 'rename':
                        break;
                    case 'delete':
                        break;
                }
            });
            break;
        default:break;
    }
}