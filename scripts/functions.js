//Display time and date
function clock(){
    var date=new Date();
    var h=date.getHours();
    if(h<10) h= '0' + h;
    var t=date.getMinutes();
    if(t<10) t= '0' + t;
    var d=date.getDate();
    if(d<10) d= '0' + d;
    var m=date.getMonth() + 1;
    if(m<10) m = '0' + m;
    var y=date.getFullYear();

    $("#task_corner").html("<p>" + h + ":" + t + "</p><p>" + d + "/" + "/" + m + "/" + y + "</p>");
    setTimeout(clock, 30000);
}

//Close a window depending on what has been clicked
function closeWindow(target, tclass){
    let window_id="#" + $(target).parents("." + tclass).attr('id');
    let id=window_id.replace("#" + tclass + "_", "");
    $("#tb_window_" + id).remove();
    $("#window_" + id ).toggleClass("visible invisible");
}

//Context menu depending on what has been clicked
function switchClass(e, fclass, target){
    let string, left, top, bottom, right, id;
    const box = target.getBoundingClientRect();
    switch(fclass){
        case 'folder':
            string="<div id='contextmenu'>\
                <ul>\
                    <li><button id='open'><p lang='fr'>Ouvrir</p></button></li>\
                    <li><button id='copy'><p lang='fr'>Copier</p></button></li>\
                    <li><button id='cut'><p lang='fr'>Coller</p></button></li>\
                    <li><button id='rename'><p lang='fr'>Renommer</p></button></li>\
                    <li><button id='delete'><p lang='fr'>Supprimer</p></button></li>\
                </ul>\
                </div>";
            $(target).append(string);
            left = e.clientX - box.left + "px";
            top = e.clientY - box.top + "px";
            $("#contextmenu").css({"top": top, "left": left});
            $("button").click(function(e){
                e.preventDefault();
                switch($(this).attr('id')){
                    case 'open':
                        let img_src=$(this).parents(".folder").children("img").attr("src");
                        id=$(this).parents(".folder").attr("id").replace('folder_','');
                        if($("#window_" + id).hasClass("invisible")) $("#window_" + id).toggleClass("invisible visible");
                        if($("#tb_window_" + id).length<1) $("#task_windows ul").append("<li class='tb_window' id='tb_window_"+id+"'></li>");
                        $("#tb_window_" + id).css({
                            "background-image":"url('" + img_src + "')",
                            "background-size":"contain",
                            "background-position":"center",
                            "background-repeat":"no-repeat"
                        });
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
        case 'tb_window':
            string="<div id='contextmenu'>\
                <ul>\
                    <li><button id='pin'><p lang='fr'>Epingler</p></button></li>\
                    <li><button id='close'><p lang='fr'>Fermer</p></button></li>\
                </ul>\
                </div>";
            $(target).append(string);
            left= e.clientX - box.left + "px";
            bottom= box.bottom - e.clientY + "px";
            $("#contextmenu").css({"bottom": bottom, "left": left});
            $("button").click(function(e){
                e.preventDefault();
                switch($(this).attr('id')){
                    case 'close':
                        closeWindow(e.target, 'tb_window');
                        break;
                    default:break;
                }
            });
            break;
        case 'window_min':
            string="<div id='contextmenu'>\
                <ul>\
                    <li><button id='open'><p lang='fr'>Ouvrir</p></button></li>\
                    <li><button id='setwp'><p lang='fr'>Fond d'écran</p></button></li>\
                    <li><button id='delete'><p lang='fr'>Supprimer</p></button></li>\
                </ul>\
                </div>";
            $(target).append(string);
            left = e.clientX - box.left + "px";
            top = e.clientY - box.top + "px";
            $("#contextmenu").css({"top": top, "left": left});
            $("button").click(function(e){
                e.preventDefault();
                switch($(this).attr('id')){
                    case 'setwp':
                        $("#screen_on").css(
                            "background-image",
                            "radial-gradient(circle, rgba(40,57,20,0.45) 0%,\
                            rgba(20,29,9,0.8) 80%, rgba(0,0,0,0.99) 100%),\
                            url('" + $(target).children('img').attr('src') + "')");
                        break;
                    default:break;
                }
            });
            break;
        default:break;
    }
}