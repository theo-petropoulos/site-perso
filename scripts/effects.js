//Init tittle for google search
$("title").html("Petropoulos Théo - Web / Sec Developer");

$(function(){
    const audiobuzz= new Audio('assets/audio/sounds/buzz.mp3');
    const audiobip= new Audio('assets/audio/sounds/bip.mp3');
    const audioclick= new Audio('assets/audio/sounds/click.mp3');
    const audiodbclick= new Audio('assets/audio/sounds/dbclick.mp3');
    window.loctimer='';
    //Used for mascots' lines
    window.punchcount=0;
    window.tipscount=0;
    window.punch= new Audio('assets/audio/sounds/punch.mp3');
    //Init * color
    $("*").not('.example, textarea').css("color", "rgb(173, 255, 47)");
    //Init global language
    window.language='fr';
    //Init array of colors, current font and current wallpaper for dynamic purposes
    window.array_colors={
        'green':'rgb(173, 255, 47)',
        'red':'rgb(165, 17, 17)',
        'blue':'rgb(35, 105, 200)',
        'white':'rgba(255,255,255,0.9)'
    };
    window.color='green';
    window.font='DotGothic16';
    window.background='';
    //Init title and set default language to fr
    $("title").html("No signal");
    $('[lang="en"]').toggleClass("out");
    //Used to trigger dblclick event vs simple click
    var prevent = false;
    var timer = 0;

    //Used to stop functions
    window.power = 'shutdown';
    
    //Display time
    clock();
    
    $(document).on('click ', "#switch_power", function(e){
        e.preventDefault();
        power='on';
        $("#screen_off").toggleClass("invisible visible");
        //TOGGLE POINT
        $("#screen_on").toggleClass("visible invisible");
        audiobuzz.play();
        $("#screen_on").css("background-image", "radial-gradient(circle, rgba(40,57,20,0.45) 0%, rgba(20,29,9,0.8) 80%, rgba(0,0,0,0.99) 100%), url('assets/images/backgrounds/Waneella - Desos Pizza.gif')");
        background=$("#screen_on").css("background-image");
        setTimeout(() => {$("title").html("Bonjour, Monde.")}, 1850);
        setTimeout(() => {$("#linkicon").html('<link id="linkicon" rel="icon" type="image/png" href="assets/images/icons/logo2.png">')}, 2250);
        setTimeout(() => {$("#task_bar").toggleClass("visible invisible");}, 2500);
        setTimeout(() => {$("#user").toggleClass("invisible");}, 3000);
        setTimeout(() => {$("#music_player").add($("#screen_toggle")).add($("#tips_mascot")).toggleClass("invisible");}, 3300);
        setTimeout(() => {$("#folder_section").toggleClass("visible invisible");}, 3500);
        setTimeout(() => {$("#animation_corporations").toggleClass("visible invisible");}, 3800);
        setTimeout(() => {screen_flick(); glitch_font();}, 9800);
        for(let i=1;i<5;i++) setTimeout(() => {
            $("#user .user"+i).toggleClass("invisible");
            audiobip.currentTime=0;
            audiobip.play();}, 3500+i*250);
        $(this).css('display', 'none');
        });

    //Power off
    $(document).on('click ', "#shutdown_btn", function(e){
        power='shutdown';
        $("#folder_section").toggleClass("visible invisible");
        setTimeout(() => {$("#music_player").toggleClass("invisible");}, 300);
        setTimeout(() => {$("#screen_on").toggleClass("invisible visible");}, +00);
        setTimeout(() => {
            $("#user").toggleClass("invisible");
            for(let i=1;i<5;i++) $("#user .user"+i).toggleClass("invisible");
        }, 1100);
        setTimeout(() => {$("#animation_corporations").add($("#screen_toggle")).add($("#tips_mascot")).toggleClass("visible invisible");}, 1200);
        setTimeout(() => {$("#task_bar").toggleClass("visible invisible");}, 1800);
        setTimeout(() => {$("#linkicon").html('<link id="linkicon" rel="icon" type="image/png" href="assets/images/icons/logo1.png">')}, 2250);
        setTimeout(() => {$("#screen_off").toggleClass("visible invisible");}, 2500);
        setTimeout(() => {
            $("#switch_power").toggle();
            $("title").html("No Signal");
        }, 2700);
    });

    //Background on folder' hover
    $(document).on('mouseover', ".drag.folder", function(){
        $(this).css("background", "rgba(0,0,0,0.2");
    }, function(){
        $(this).css("background", "initial");
    });

    //Change language
    $(document).on('click ', "#switch_lang", function(e){
        if(language=='fr') language='en';
        else language='fr';
        $('[lang="fr"]').toggleClass("out");
        $('[lang="en"]').toggleClass("out");
        clock();
    });

    //Copy mail adress
    $(document).on('click ', '#copy_mail', function(){
        let element = document.getElementById('amail');
        let elementText = element.textContent; 
        navigator.clipboard.writeText(elementText);
    });

    //Play sound on double click
    $(document).on('dblclick', function(){
        clearTimeout(timer);
        prevent=true;
        audiodbclick.currentTime=0;
        audiodbclick.play();
    });
    
    //Play sound on left click
    $(document).on('click ', function(e){
        if(!e.isTrigger){
            audioclick.currentTime=0;
            timer=setTimeout(() => {
                if(prevent==false){
                    audioclick.play();
                } prevent=false;
            }, 100);
        }
    });

    //Play sound on right click
    $(document).on('contextmenu', function(e){
        audioclick.currentTime=0;
        audioclick.play();
    });

    //Play sound on keypress
    $(document).on('keyup', function(e){
        randomKeyboardSound();
    });

    //Used to highlight animation items
    var animlight={};
    jQuery('#animation_room').maphilight();
    animlight.alwaysOn = false;
    animlight.fillColor = '83f16d';
    animlight.stroke = false;
    animlight.fillOpacity = '0.2';
    animlight.shadow = true;
    shadowX= '0';
	shadowY= '0';
	shadowRadius= '15';
	shadowColor= '83f16d';
	shadowOpacity= '0.2';
	shadowPosition= 'outside';
	shadowFrom= true;
    $('area').data('maphilight', animlight).trigger('alwaysOn.maphilight');

    //Show tips when hovering mascot
    $(document).on("mouseover", "#tips_mascot", function(){
        const tips_quotes_fr=[
            "Psssst ! Votre écran fait des siennes ? Mettez lui un petit coup.", "S'il vous demande, je ne vous ai rien dit.", 
            "Saviez-vous que vous pouvez changer votre fond d'écran ?", "Vous pouvez également changer la police et la couleur du texte"
        ];
        const tips_quotes_en=[
            "Psssst ! Is your screen misbehaving ? Give it a little slap.", "If he asks, I never told you anything.", 
            "Did you know : You can change your wallpaper.", "You also can change the font and its color."
        ];
        let temp_image=$("#tips_mascot img").attr('src');

        if(tipscount==0) $("#tips_mascot img").attr('src', 'assets/images/other/clip-e_point.gif');
        else if(tipscount==1) $("#tips_mascot img").attr('src', 'assets/images/other/clip-e_thumb.gif');
        else if(tipscount==2) $("#tips_mascot img").attr('src', 'assets/images/other/clip-e_wp.gif');
        else if(tipscount==3) $("#tips_mascot img").attr('src', 'assets/images/other/clip-e_font.gif');

        if($("#clipe_speaks").length<1){
            if(tips_quotes_fr[tipscount]!=undefined){
                if(language=='fr')$("#tips_mascot").append("<p class='distorted' lang='fr' id='clipe_speaks'>" + tips_quotes_fr[tipscount] + "</p>");
                else $("#tips_mascot").append("<p class='distorted' lang='en' id='clipe_speaks'>" + tips_quotes_en[tipscount] + "</p>");
            }
            else{
                if(language=='fr') $("#tips_mascot").append("<p lang='fr' id='clipe_speaks'>C'est tout pour moi.</p>");
                else $("#tips_mascot").append("<p lang='en' id='clipe_speaks'>That's all folks.</p>");
            }
            $("#clipe_speaks").css({
                "position":"absolute",
                "bottom":"100%",
                "left":"0",
                "transform":"translate(-115%,50%)",
                "min-width":"175px",
                "max-width":"250px",
                "z-index":"7",
                "background": "rgba(0,0,0,0.9)",
                "padding":"10%",
                "padding-bottom":"40%",
                "border-radius":"5px",
                "clip-path": "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 100% 100%, 50% 75%, 0% 75%)"
            });
        }
        $(document).on("mouseleave", "#tips_mascot", function(){
            $("#clipe_speaks").remove();
            $("#tips_mascot img").attr('src', temp_image);
        });
    });

    $(document).on("click", "#tips_mascot", function(){
        if(tipscount>=4) tipscount=1;
        tipscount++;
        $(this).trigger('mouseleave');
        $(this).trigger('mouseenter');
    });

    //Show text when hovering mascot
    $(document).on("mouseover", "#screen_toggle", function(){
        const mascot_quotes_fr=[
            "Je ne suis pas un punching ball.", "Je passe l'éponge sur ce coup.", "Ah d'accord on en est là.", "Vous n'en avez pas marre ?", 
            "BRAVO ! Très mature, vraiment.", "Ben bien sûr, toujours plus.", "Bon, il serait peut-être temps d'arrêter non ?", 
            "...zZzZzZ", "Je vais finir par m'énerver.", "A qui vais-je faire croire ça, je ne suis qu'un tas de 14400 pixels.",
            "Vous êtes en train de vous demander combien de phrases je peux réciter ?", "Vous n'êtes pas au bout de vos surprises.",
            "Vous savez, on peut jouer à ce jeu encore trèèèèès longtemps.", "Entre deux patates, pensez à envoyer un mail au créateur du site si vous êtes recruteur.",
            "C'est l'histoire d'un type qui avait cassé sa souris à force de cliquer ici.", "Vous me frappez pour la " + punchcount + "ème fois",
            "Et pourtant, vous continuez. Faudrait se poser des questions.", "Si seulement je n'étais pas un écran dans un écran, je ...",
            "Je vous le dis, je n'aurai pas hésité une seule seconde à ...", "Ouaip, c'est ce que j'aurai fait.", "Ouaip", 
            "Bon, on a peut-être fait le tour de la question là non ?", "Je ne suis pas un punching ball", "Vous pensiez que je n'avais plus de phrases en stock ?",
            "Grossière erreur.", punchcount + " coups plus tard, toujours debout.", "Je ressens la douleur vous savez ?",
            "La douleur de constater qu'il aura fallu 800 millions d'années.", "800 millions d'années d'évolution pour que vous soyez là derrière votre écran à cliquer frénétiquement sur ce bouton.",
            "Vous êtes en plein dans l'engagement, vous vous dites \"après tous ces clics, j'aimerai quand même voir la fin\".",
            "Et s'il n'y avait pas de fin ?", "Vous et moi, vos clics, mes messages, jusqu'à la fin des temps.",
            "Le fait est que passer le reste de ma vie numérique avec un fou de la baffe ne me plait guère."
        ];
        const mascot_quotes_en=[
            "I'm not a punching bag.", "I'm forgiving you on this one.", "Oh okay, here we go.", "Aren't you fed up?",
            "BRAVO! Very mature, really.", "Of course, there's always more.", "Well, maybe it's time for you to stop, right?",
            "... zZzZzZ", "I'm starting to get pissed off.", "Who am I going to make believe this to, I'm just a bunch of 14400 pixels.",
            "You're wondering how many sentences can I recite?", "You won't believe what's coming next.",
            "You know, we can play this game for a loooooong time.", "Between two smacks, consider sending an email to the creator of this website if you are recruiting.",
            "This is the story of a guy who broke his mouse clicking here.", "You hit me for the " + punchcount + "th time",
            "And yet, you're still going on. Questions should be asked.", "If only I weren't a screen within a screen, I ...",
            "I'm telling you, I wouldn't have hesitated for a single second to ...", "Yep, that's what I would've done.", "Yep.",
            "Well, we may have covered the question here, haven't we?", "I'm not a punching bag", "You thought I had no more sentences in stock?",
            "Big mistake.", punchcount + "slaps later, still standing.", "I do feel pain you know?",
            "Pain seeing that it took 800 million years.", "800 million years of evolution for you to be there behind your screen clicking frantically on that button.",
            "You are right-on the engagement, you're saying to yourself \" after all these clicks, I'd like to see the end of it \".",
            "What if there's no end?", "You and me, your clicks, my messages, until the end of time.",
            "The point is, I don't really like the idea of spending the rest of my digital life with a slap madlad."
        ];
        if($("#hape_speaks").length<1){
            if(mascot_quotes_fr[punchcount]!=undefined){
                if(language=='fr')$("#screen_toggle").append("<p class='distorted' lang='fr' id='hape_speaks'>" + mascot_quotes_fr[punchcount] + "</p>");
                else $("#screen_toggle").append("<p class='distorted' lang='en' id='hape_speaks'>" + mascot_quotes_en[punchcount] + "</p>");
            }
            else{
                if(language=='fr') $("#screen_toggle").append("<p lang='fr' id='hape_speaks'>Félicitations, vous m'avez cassé.</p>");
                else $("#screen_toggle").append("<p lang='en' id='hape_speaks'>Congratulations, you broke me.</p>");
            }
            $("#hape_speaks").css({
                "position":"absolute",
                "bottom":"100%",
                "right":"0",
                "transform":"translate(115%,50%)",
                "min-width":"175px",
                "max-width":"250px",
                "z-index":"7",
                "background": "rgba(0,0,0,0.9)",
                "padding":"10%",
                "padding-bottom":"40%",
                "border-radius":"5px",
                "clip-path": "polygon(0% 0%, 100% 0%, 100% 82%, 71% 82%, 0 100%, 17% 82%, 0 82%)"
            });
        }
        $(document).on("mouseleave", "#screen_toggle", function(){
            $("#hape_speaks").remove();
        });
    });

    $(document).on('click', '#clipe_speaks, #hape_speaks', function(e){
        e.stopImmediatePropagation();
        $(this).remove();
    });
});