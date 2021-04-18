$(function(){
    window.temp=null;
    
    //Standards for click
    $(document).on('click ', function(e){
        if($("#contextmenu").length>0) $("#contextmenu").remove();
        if(!$("#start_menu").hasClass('invisible') && !$(e.target).is('#start_menu') && !$(e.target).parents('#settings')) $("#start_menu").toggleClass('invisible');
        if(!$(e.target).parents('.menu').children('.submenu').hasClass('visible')) $('.submenu.visible').toggleClass('invisible visible');
        if( !($(e.target).parents('.folder, .file') || $(e.target).hasClass('.folder, .file'))
            && $(temp).length>0 ) {
                temp.css('background', 'initial');
                temp=null;
            }
    });

    //Open start menu
    $(document).on('click ', "#start_btn", function(e){
        e.preventDefault();
        e.stopPropagation();
        $("#start_menu").toggleClass("invisible");
    });

    //Open settings for mobile
    $(document).on('click', '#settings', function(){
        if($('#settings_list').css('display')=='none') $('#settings_list').css({"display":"flex"});
        else $('#settings_list').css({"display":"none"});
    });
    $(document).on('click', '#settings_list li', function(){
        $('#settings_list li ul').not(this).css("display", "none"); 
        if($(this).children('ul').css('display')=='none') $(this).children('ul').css({"display":"flex"});
        else $(this).children('ul').css({"display":"none"});
    });

    //Highlight a clickable element + remember it
    $(document).on('click ', '.folder, .file', function(){
        if($(temp).length>0) temp.css('background', 'initial');
        temp=$(this);
        temp.css("background","rgba(0,50,100,0.6)");
    });

    //Drag a file
    $(document).on('mousedown', '.drag', function(e){
        if( $(e.target).attr('id')=='music_volume'  || $(e.target).parents('.window').hasClass('fullscreen') ||  
            $(e.target).is("button") || $(e.target).is('.window_content') || $(e.target).parent().is('.window_min') || 
            $(e.target).parents('.folder').hasClass('deleted') || $(e.target).is('#window_infos_message_box') || $(e.target).is('textarea')){
                if($(temp).length>0 && !$(e.target).is('button')){
                    temp.css('background', 'initial');
                    temp=null;
                    $(e.target).parents('.window_group').children('.window_articles').css({
                        "background":"initial",
                        "width":"0%"
                    });
                    $('.window_infos_article').not('.invisible').toggleClass('invisible');
                }
                e.stopPropagation();
            }
        else{
            const thisdrag= document.getElementById($(this).attr('id'));
            $(".drag").not($(this)).css("z-index","initial")
            $(thisdrag).css({"z-index":"6"});
            e.preventDefault();
            let prevX= e.clientX;
            let prevY= e.clientY;
            $(document).on('mousemove touchmove', function(e){
                $('.drag').on('hover', function(e){
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
                $(thisdrag).css({"left" : newX, "top" : newY, "transform":"none"});
                if(thisdrag.id!=='music_player' && !thisdrag.classList.contains('window')){
                    $(thisdrag).css("background","rgba(0,0,0,0.5)");
                }
                prevX= e.clientX;
                prevY= e.clientY;
            });
            $(document).on('mouseup touchend', function(){
                $(thisdrag).not("#music_player, .window").css({"background":"transparent"});
                $(document).off("mousemove");
                $(".drag").not('.window').css("z-index", "initial");
                $(".drag").off("mouseenter mouseleave");
            });
        }
    });

    //Open folder on double click
    $(document).on('dblclick', ".folder", function(){
        let img_src=$(this).children("img").attr("src");
        let id=$(this).attr("id").replace('folder_','');
        if(id=='credits'){
            if(language=='fr'){
                $('#window_credits_textarea').html("Effet 'Machine à écrire' : Tameem Safi - https://github.com/tameemsafi/typewriterjs &#13;&#10;\
Surbrillance des éléments clickables dans 'Informations Personnelles' : David Lynch - https://github.com/kemayo/maphilight &#13;&#10;\
Animation de l'e-Carte Postale : Kenze Wee - https://www.instagram.com/kenze_wee/?hl=fr &#13;&#10;\
Fond d'écran par défaut : Waneella - https://waneella.tumblr.com/ &#13;&#10;\
Générateur de parchemin : Léonard Allain-Launay / Mathieu Thoretton / Cosmina - http://htck.github.io/bayeux/#!/ &#13;&#10;");
            }
            else if(language=='en'){
                $('#window_credits_textarea').html("Typewriter effect : Tameem Safi - https://github.com/tameemsafi/typewriterjs &#13;&#10;\
Clickable elements' highlight inside 'Personal Informations' : David Lynch - https://github.com/kemayo/maphilight &#13;&#10;\
e-Postcard animation : Kenze Wee - https://www.instagram.com/kenze_wee/?hl=fr &#13;&#10;\
Default background : Waneella - https://waneella.tumblr.com/ &#13;&#10;\
Parchment generator : Léonard Allain-Launay / Mathieu Thoretton / Cosmina - http://htck.github.io/bayeux/#!/ &#13;&#10;");
            }
        }
        if($("#window_" + id).hasClass("invisible")) $("#window_" + id).toggleClass("invisible visible");
        if($("#tb_window_" + id).length<1) $("#task_windows ul").append("<li class='tb_window' id='tb_window_"+id+"'></li>");
        $("#tb_window_" + id).css({
            "background-image":"url('" + img_src + "')",
            "background-size":"contain",
            "background-position":"center",
            "background-repeat":"no-repeat"
        });
    });

    //On area click
    $(document).on('click ', 'area', function(e){
        e.preventDefault();
        let id=$(this).attr("id");
        $('#window_' + id).toggleClass('invisible').css("z-index","8");
        if($("#tb_window_" + id).length<1) $("#task_windows ul").append("<li class='tb_window' id='tb_window_"+id+"'></li>");
        $("#tb_window_" + id).css({
            "background-image":"url('assets/images/icons/file_green.png')",
            "background-size":"contain",
            "background-position":"center",
            "background-repeat":"no-repeat"
        });
        if(id=='computer'){
            var area, typewriter;
            if(language=='fr'){
                area = document.getElementById('pcomputer_fr');
                typewriter = new Typewriter(area, {
                loop: false,
                delay: 45,
                });

                typewriter
                .pauseFor(550)
                .typeString('Récupération des données...<br>')
                .pauseFor(500)
                .typeString('Processeur :..........<strong class="str">PHP</strong> Ryzen <strong class="str">8.0</strong><br>')
                .pauseFor(250)
                .typeString('Carte mère :..........<strong class="str">HTML5</strong> TUF Gaming <strong class="str">CSS/SCSS</strong><br>')
                .pauseFor(250)
                .typeString('Carte graphique 1 :...MSI <strong class="str">Javascript</strong>X 3080 TI<br>')
                .pauseFor(250)
                .typeString('Carte graphique 2 :...MSI <strong class="str">Jquery</strong>X 3080 TI<br>')
                .pauseFor(250)
                .typeString('Mémoire vive :........<strong class="str">AjaX</strong> Fury DDR4 2x16Go 3200MHz<br>')
                .pauseFor(250)
                .typeString('Stockage 1 :..........<strong class="str">Wordpress</strong> Digital 1 To<br>')
                .pauseFor(250)
                .typeString('Stockage 2 :..........<strong class="str">Bootstrap</strong> 480 Go<br>')
                .pauseFor(250)
                .typeString('Alimentation :........<strong class="str">MySQL</strong> RM650X Gold<br>')
                .pauseFor(350)
                .typeString('<br><br>Mises à jour à venir :<br>\
                <strong class="str">Symfony</strong> - Firmware - 1.0.0.3<br>\
                <strong class="str">React</strong> - Display - 0.95b<br>\
                <strong class="str">Angular</strong> - Monitor - 2.1<br>\
                <strong class="str">Node.js</strong> - net - 1.30.175')
                .start();
            }
            else if(language=='en'){
                area = document.getElementById('pcomputer_en');
                typewriter = new Typewriter(area, {
                loop: false,
                delay: 45,
                });

                typewriter
                .pauseFor(550)
                .typeString('Retrieving data...<br>')
                .pauseFor(500)
                .typeString('Main processor :........<strong class="str">PHP</strong> Ryzen <strong class="str">8.0</strong><br>')
                .pauseFor(250)
                .typeString('Motherboard :...........<strong class="str">HTML5</strong> TUF Gaming <strong class="str">CSS/SCSS</strong><br>')
                .pauseFor(250)
                .typeString('Graphics card 1 :.......MSI <strong class="str">Javascript</strong>X 3080 TI<br>')
                .pauseFor(250)
                .typeString('Graphics card 2 :.......MSI <strong class="str">Jquery</strong>X 3080 TI<br>')
                .pauseFor(250)
                .typeString('Random-access memory :..<strong class="str">AjaX</strong> Fury DDR4 2x16Go 3200MHz<br>')
                .pauseFor(250)
                .typeString('Storage 1 :.............<strong class="str">Wordpress</strong> Digital 1 To<br>')
                .pauseFor(250)
                .typeString('Storage 2 :.............<strong class="str">Bootstrap</strong> 480 Go<br>')
                .pauseFor(250)
                .typeString('Power supply unit :.....<strong class="str">MySQL</strong> RM650X Gold<br>')
                .pauseFor(350)
                .typeString('<br><br>Upcoming updates :<br>\
                <strong class="str">Symfony</strong> - Firmware - 1.0.0.3<br>\
                <strong class="str">React</strong> - Display - 0.95b<br>\
                <strong class="str">Angular</strong> - Monitor - 2.1<br>\
                <strong class="str">Node.js</strong> - net - 1.30.175')
                .start();
            }
        }
    });

    //Close warning message
    $(document).on('click ', "#close_warning", function(){
        $("#warning_message").remove();
    });

    //Open file on double click
    $(document).on('dblclick', ".file", function(){
        $(this).trigger('contextmenu');
        $("#contextmenu #open").trigger("click");
    });

    $(document).on('click ',".window_view", function(e){
        e.preventDefault();
    });

    $(document).on('click', "#open_parchment", function(e){
        e.preventDefault();
        $(this).parents('.window_content_center').html('<img id="parchment" src="assets/images/other/parchment.png">');
        $("#parchment").css({"width":"100%", "object-fit":"contain"});
        $(this).parents('.window_content_center').css({"width":"100%"});
        $("#window_self.window.drag.window_anim div.window_menu ul.window_menu_bar div.window_menu_right li button.window_maximize").trigger('click');
        $("#window_self.window.drag.window_anim.fullscreen div.window_content.window_content_infos").css({"padding":"0"});
    });
});