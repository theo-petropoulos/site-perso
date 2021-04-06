//Display time and date
function clock(){
    var date=new Date();
    var h=h_en=date.getHours();
    if(h<12){
        if(h<10) h=h_en='0' + h;
        else h_en=h_en;
    }
    else{
        if(h_en<22) h_en= '0' + h_en - 12;
        else h_en = h_en - 12;
    }
    var t=t_en=date.getMinutes();
    if(t<10) t=t_en= '0' + t;
    if(h<12) t_en+= ' am';
    else t_en += ' pm';
    var d=date.getDate();
    if(d<10) d= '0' + d;
    var m=date.getMonth() + 1;
    if(m<10) m = '0' + m;
    var y=date.getFullYear();

    $("#task_corner span:lang(fr)").html(
        "<p lang='fr'>" + h + ":" + t + "</p>\
        <p lang='fr'>" + d + "/" + m + "/" + y + "</p>"
    );
    $("#task_corner span:lang(en)").html(
        "<p lang='en'>" + h_en + ":" + t_en + "</p>\
        <p lang='en'>" + m + "/" + d + "/" + y + "</p>"
    );
    setTimeout(clock, 30000);
}

//Close a window depending on what has been clicked
function closeWindow(targetid){
    let window_id="#tb_" + targetid;
    if(!$(window_id).hasClass('noremoval')) $(window_id).remove();
    $('#' + targetid).toggleClass("visible invisible");
}

//Get the related file associated to $this
function getSibling(item){
    let iid=$(item).attr('id');
    let id;
    if(~iid.indexOf('tb_window_')){
        id=iid.replace('tb_window_', '');
        return "#folder_" + id;
    }
    else if(~iid.indexOf('folder_')){
        id=iid.replace('folder_', '');
        return '#tb_window_' + id;
    }
    return 0;
}

//Get the related file associated to $this
function getWindow(item){
    let iid=$(item).attr('id');
    let id, twindow;
    if(~iid.indexOf('tb_window_')){
        id=iid.replace('tb_window_', '');
        return twindow = "#window_" + id;
    }
    else if(~iid.indexOf('folder_')){
        id=iid.replace('folder_', '');
        return twindow = "#window_" + id;
    }
    return 0;
}

//Keep current language
function keepLang(){
    if($('[lang="fr"]').hasClass("out")) $('#contextmenu [lang="fr"]').toggleClass("out");
    else $('#contextmenu [lang="en"]').toggleClass("out");
}

//Context menu depending on what has been clicked
function switchClass(e, fclass, target){
    let string, left, top, bottom, right, id, img_src;
    const box = target.getBoundingClientRect();
    let twindow=getWindow(target);
    switch(fclass){
        case 'folder':
            string="<div id='contextmenu'>\
                <ul>\
                    <li><button id='open'>\
                        <p lang='fr'>Ouvrir</p><p lang='en'>Open</p>\
                    </button></li>\
                    <li><button id='copy'>\
                        <p lang='fr'>Copier</p><p lang='en'>Copy</p>\
                        </button></li>\
                    <li><button id='cut'>\
                        <p lang='fr'>Coller</p><p lang='en'>Paste</p>\
                    </button></li>\
                    <li><button id='rename'>\
                        <p lang='fr'>Renommer</p><p lang='en'>Rename</p>\
                    </button></li>\
                    <li><button id='delete'>\
                        <p lang='fr'>Supprimer</p><p lang='en'>Delete</p>\
                    </button></li>\
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
                        let tbimg_src=$(this).parents(".folder").children("img").attr("src");
                        id=$(this).parents(".folder").attr("id").replace('folder_','');
                        if($("#window_" + id).hasClass("invisible")) $("#window_" + id).toggleClass("invisible visible");
                        if($("#tb_window_" + id).length<1) $("#task_windows ul").append("<li class='tb_window' id='tb_window_"+id+"'></li>");
                        $("#tb_window_" + id).css({
                            "background-image":"url('" + tbimg_src + "')",
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
                        let temp_name=$(target).children('p').html();
                        $(target).children('p').remove();
                        $(target).append(
                            '<form method="post" action="index.php" id="form_rename">\
                                <textarea name="this_rename" id="this_rename" style="resize: none" maxlength=16 required autofocus></textarea>\
                                <button class="form_submit" type="submit"></button>\
                            </form>'
                        );
                        $("#this_rename").css({
                            "background":"transparent", 
                            "color":"rgb(173, 255, 47)", 
                            "font-family":"DotGothic16, Courier",
                            "border":"none",
                            "outline":"none",
                            "text-align":"center"  
                        });
                        $(".form_submit").css("display", "none");
                        $("#this_rename").focus();
                        $("#this_rename").keypress(function(e){
                            if(e.keyCode==13){
                                $("#this_rename").trigger("focusout");
                            }
                        });
                        $("#this_rename").focusout(function(){
                            if($("#this_rename").val().length>0) $(target).append('<p>'+ $("#this_rename").val() + '</p>')
                            else $(target).append('<p>' + temp_name + '</p>');
                            $("#form_rename").remove();
                        });
                        break;
                    case 'delete':
                        break;
                }
            });
            break;
        case 'tb_window':
            string="<div id='contextmenu'><ul>";
            if(!$(target).hasClass('noremoval')) string+=
            "<li><button id='pin'>\
                <p lang='fr'>Epingler</p><p lang='en'>Pin</p>\
            </button></li>";
            else string+=
            "<li><button id='unpin'>\
                <p lang='fr'>Détacher</p><p lang='en'>Unpin</p>\
            </button></li>";
            if($(twindow).hasClass('invisible')) string+=
            "<li><button id='open'>\
                <p lang='fr'>Ouvrir</p><p lang='en'>Open</p>\
            </button></li>"
            else string+=
            "<li><button id='close'>\
                <p lang='fr'>Fermer</p><p lang='en'>Close</p>\
            </button></li>"
            string+="</ul></div>";

            $(target).append(string);
            left= e.clientX - box.left + "px";
            bottom= box.bottom - e.clientY + "px";
            $("#contextmenu").css({"bottom": bottom, "left": left});
            $("button").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                switch($(this).attr('id')){
                    case 'unpin':
                        if($(twindow).hasClass('invisible')) $(this).parents('.tb_window').remove();
                    case 'pin':
                        $(this).parents('.tb_window').toggleClass('noremoval');
                        break;
                    case 'close':
                        let closeid=$(e.target).parents('.tb_window').attr('id').replace('tb_', '');
                        closeWindow(closeid);
                        break;
                    case 'open':
                        $(this).parents('.tb_window').trigger("click");
                        break;
                    default:break;
                }
                $("#contextmenu").remove();
            });
            break;
        case 'window_min':
            img_src=$(target).children('img').attr('src');
            string="<div id='contextmenu'>\
                <ul>\
                    <li><button id='open'>\
                        <p lang='fr'>Ouvrir</p><p lang='en'>Open</p>\
                    </button></li>\
                    <li><button id='setwp'>\
                        <p lang='fr'>Fond d'écran</p><p lang='en'>Wallpaper</p>\
                    </button></li>\
                    <li><button id='delete'>\
                        <p lang='fr'>Supprimer</p><p lang='en'>Delete</p>\
                    </button></li>\
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
                        $("#window_openimg .window_content").html('<img src="' + img_src + '">');
                        $("#window_openimg").toggleClass('invisible');
                        id=$(this).attr("id").replace('img_','');
                        if($("#tb_window_openimg").length<1) $("#task_windows ul").append("<li class='tb_window' id='tb_window_openimg'></li>");
                        $("#tb_window_openimg").css({
                            "background-image":"url('assets/images/file.png')",
                            "background-size":"contain",
                            "background-position":"center",
                            "background-repeat":"no-repeat"
                        });
                        break;
                    case 'setwp':
                        $("#screen_on").css(
                            "background-image",
                            "radial-gradient(circle, rgba(40,57,20,0.45) 0%,\
                            rgba(20,29,9,0.8) 80%, rgba(0,0,0,0.99) 100%),\
                            url('" + img_src + "')");
                        break;
                    case 'delete':
                        let origin= $(target).parents('.window').attr('id');
                        let classes=$(target).attr("class").split(/\s+/);
                        classes= classes.toString().replace(/,/g, ' ');
                        let filename= $(target).children('p').html();
                            $("#window_bin .window_content").append('\
                                <div origin="' + origin + '" class="deleted ' + classes + '" id="' + $(target).attr('id') +'">\
                                    <img src="' + img_src + '">\
                                    <p class="distorted">' + filename + '</p>\
                                </div>\
                                ');
                            $(target).remove();
                            break;
                    default:break;
                }
            });
            break;
        case 'deleted':
            img_src=$(target).children('img').attr('src');
            string="<div id='contextmenu'>\
                <ul>\
                    <li><button id='restore'>\
                        <p lang='fr'>Réstaurer</p><p lang='en'>Restore</p>\
                    </button></li>\
                    <li><button id='cdelete'>\
                        <p lang='fr'>Supprimer</p><p lang='en'>Delete</p>\
                    </button></li>\
                </ul>\
                </div>";
            $(target).append(string);
            left = e.clientX - box.left + "px";
            top = e.clientY - box.top + "px";
            $("#contextmenu").css({"top": top, "left": left});
            $("button").click(function(e){
                e.preventDefault();
                switch($(this).attr('id')){
                    case 'restore':
                        let direction = '#' + $(target).attr('origin');
                        let idrestored = $(target).attr('id');
                        let classes=$(target).attr("class").split(/\s+/);
                        let filename= $(target).children('p').html();
                        classes= classes.toString().replace(/,/g, ' ').replace('deleted ', '');
                        $(direction + ' .window_content').append('\
                            <div class="' + classes + '" id="' + idrestored +'">\
                                <img src="' + img_src + '">\
                                <p class="distorted">' + filename + '</p>\
                            </div>\
                            ');
                        $(target).remove();
                        break;
                    case 'cdelete':
                        $(target).remove();
                        break;
                }
            });
            break;
        default:break;
    }
    keepLang();
}