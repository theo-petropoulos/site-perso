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
    if(typeof(array_colors)!='undefined') $("#task_corner span p").css("color", array_colors[color]);
    setTimeout(clock, 30000);
}

//Glitch the text
function glitch_font(){
    if(power=='shutdown' || power=='switch_off') return 0;
    else{
        let timeout=Math.floor(Math.random()*6000)+10000;
        $("*").not('.example, i').css("font-family", "Courier");
        setTimeout(() => {$("*").not('.example, i').css("font-family", "Impact");}, 200);
        setTimeout(() => {$("*").not('.example, i').css("font-family", "Verdana");}, 450);
        setTimeout(() => {$("*").not('.example, i').css("font-family", "Comic sans MS");}, 550);
        setTimeout(() => {$("*").not('.example, i').css("font-family", font);}, 650);
        setTimeout(glitch_color, timeout);
    }
}

//Glitch text's color
function glitch_color(){
    if(power=='shutdown' || power=='switch_off') return 0;
    else{
        let i=Math.floor(Math.random()*10)+4;
        let timeout=Math.floor(Math.random()*6000)+10000;
        $('.distorted').css('animation', 'textglitch_' + color + ' ' + i +'s 0s linear');
        setTimeout(glitch_font, timeout);
    }
}

//Randomly glitch the screen
function screen_flick(){
    if(power=='shutdown' || power=='switch_off') return 0;
    else{
        var flick=Math.floor(Math.random()*10)+1;
        var audioflick= new Audio('assets/audio/sounds/flick.mp3');
        var audiobuzz= new Audio('assets/audio/sounds/buzz.mp3');
        switch(flick){
            case 1:
                audioflick.play();
                $("#screen_flicker").css("transition", "all 0s").toggleClass("invisible visible");
                let p=Math.floor(Math.random()*(800-400))+400;
                for(let i=0;i<3;i++){
                    let j=i*Math.floor(Math.random()*(280-80))+80;
                    p=p+j;
                    setTimeout(()=>{
                        if(i==2) $("#screen_flicker").css("transition", "all 1s");
                        $("#screen_flicker").toggleClass("invisible visible");}, p);
                }
                setTimeout(()=>{$("#screen_flicker").css("transition", "all 0s");audioflick.pause();audioflick.currentTime = 0;}, p+100);
                break;
            case 2:
                audioflick.play();
                $("#screen_flicker").css("transition", "all 0s").toggleClass("invisible visible");
                let k=Math.floor(Math.random()*(1100-600))+600;
                for(let i=0;i<5;i++){
                    let j=i*Math.floor(Math.random()*(300-100))+100;
                    k=k+j;
                    setTimeout(()=>{
                        if(i==4) $("#screen_flicker").css("transition", "all 1s");
                        $("#screen_flicker").toggleClass("invisible visible");}, k);
                }
                setTimeout(()=>{$("#screen_flicker").css("transition", "all 0s");audioflick.pause();audioflick.currentTime = 0;}, k+100);
                break;
            case 3:
                audioflick.play();
                setTimeout(()=>{audioflick.pause();audioflick.currentTime = 0;}, 500);
                $("#screen_flicker").toggleClass("invisible visible");
                setTimeout(()=>{$("#screen_flicker").css("transition", "all 2s");$("#screen_flicker").toggleClass("invisible visible")});
                break;
            default:
                break;
        }
        setTimeout(screen_flick, 11500);
    }
}

//Play a random sound on keypress
function randomKeyboardSound(){
    let i=Math.floor(Math.random()*5)+1;
    let audiokeyboard=new Audio('assets/audio/sounds/keyb' + i + '.mp3');
    audiokeyboard.play();
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
                    <li><button id='paste'>\
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
                img_src=$(target).children('img').attr('src');
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
                        // window.copied=$(target).clone();
                        // copied.attr('id', copied.attr('id') + '_copy');
                        break;
                    case 'paste':
                        // copied.clone().appendTo(getWindow($(target)));
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
                        if($(target).attr('id')!=='folder_bin'){
                            let style= $(target).attr('style');
                            let origin= $(target).parent().attr('id');
                            let classes=$(target).attr("class").split(/\s+/);
                            classes= classes.toString().replace(/,/g, ' ');
                            let filename= $(target).children('p').html();
                                $("#window_bin .window_content").append('\
                                    <div prevstyle="' + style + '" origin="' + origin + '" class="deleted ' + classes + '" id="' + $(target).attr('id') +'">\
                                        <img src="' + img_src + '">\
                                        <p class="distorted">' + filename + '</p>\
                                    </div>\
                                    ');
                            $(target).remove();
                        }
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
                        if($(target).hasClass('project_min')){
                            $('#a_' + $(target).attr('id'))[0].click();
                        }
                        else{
                            $("#window_openimg .window_content").html('<img src="' + img_src + '">');
                            $("#window_openimg").toggleClass('invisible').css("z-index","7");
                            id=$(this).attr("id").replace('img_','');
                            if($("#tb_window_openimg").length<1) $("#task_windows ul").append("<li class='tb_window' id='tb_window_openimg'></li>");
                            $("#tb_window_openimg").css({
                                "background-image":"url('assets/images/icons/file_" + color + ".png')",
                                "background-size":"contain",
                                "background-position":"center",
                                "background-repeat":"no-repeat"
                            });
                            setTimeout(function(){
                                if($(temp).length>0){
                                    temp.css('background', 'initial');
                                    temp=null;
                                }
                            }, 250);
                        }
                        break;
                    case 'setwp':
                        let old_background=background.split('url');
                        let new_background=old_background[0].concat("url('" + img_src + "')");
                        $("#screen_on").css("background-image", new_background);
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
                        let style = $(target).attr('prevstyle');
                        let direction = '#' + $(target).attr('origin');
                        let idrestored = $(target).attr('id');
                        let classes=$(target).attr("class").split(/\s+/);
                        let filename= $(target).children('p').html();
                        classes= classes.toString().replace(/,/g, ' ').replace('deleted ', '');
                        if(classes.includes('window_min')) direction = direction + " .window_content";
                        $(direction).append('\
                            <div class="' + classes + '" id="' + idrestored +'" style="' + style + '">\
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