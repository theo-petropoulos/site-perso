$(function(){
    const audiobuzz= new Audio('assets/audio/sounds/buzz.mp3');
    const audiobip= new Audio('assets/audio/sounds/bip.mp3');
    const audioclick= new Audio('assets/audio/sounds/click.mp3');
    const audiodbclick= new Audio('assets/audio/sounds/dbclick.mp3');
    window.punchcount=0;
    window.punch= new Audio('assets/audio/sounds/punch.mp3');
    $("*").not('.example').css("color", "rgb(173, 255, 47)");

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
    //Init tittle for google search
    $("title").html("Petropoulos Théo - Web developer");
    //Init title and set default language to fr
    $("title").html("No signal");
    $('[lang="en"]').toggleClass("out");
    //Used to trigger dblclick event vs simple click
    var prevent = false;
    var timer = 0;

    //Used to stop functions
    window.power = 'shutdown';
    
    clock();
    
    $(document).on('click', "#switch_power", function(e){
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
        setTimeout(() => {$("#music_player").add($("#screen_toggle")).toggleClass("invisible");}, 3300);
        setTimeout(() => {$("#folder_section").toggleClass("visible invisible");}, 3500);
        setTimeout(() => {$("#animation_dna").add($("#animation_corporations")).toggleClass("visible invisible");}, 3800);
        setTimeout(() => {screen_flick(); glitch_font();}, 9800);
        for(let i=1;i<5;i++) setTimeout(() => {
            $("#user .user"+i).toggleClass("invisible");
            audiobip.currentTime=0;
            audiobip.play();}, 3500+i*250);
        $(this).css('display', 'none');
        });

    //Power off
    $("#shutdown_btn").click(function(e){
        power='shutdown';
        $("#folder_section").toggleClass("visible invisible");
        setTimeout(() => {$("#music_player").toggleClass("invisible");}, 300);
        setTimeout(() => {$("#screen_on").toggleClass("invisible visible");}, +00);
        setTimeout(() => {
            $("#user").toggleClass("invisible");
            for(let i=1;i<5;i++) $("#user .user"+i).toggleClass("invisible");
        }, 1100);
        setTimeout(() => {$("#animation_dna").add($("#animation_corporations")).toggleClass("visible invisible");}, 1200);
        setTimeout(() => {$("#task_bar").toggleClass("visible invisible");}, 1800);
        setTimeout(() => {$("#linkicon").html('<link id="linkicon" rel="icon" type="image/png" href="assets/images/icons/logo1.png">')}, 2250);
        setTimeout(() => {$("#screen_off").toggleClass("visible invisible");}, 2500);
        setTimeout(() => {
            $("#switch_power").toggle();
            $("title").html("No Signal");
        }, 2700);
    });

    //Background on folder' hover
    $(".drag.folder").hover(function(){
        $(this).css("background", "rgba(0,0,0,0.2");
    }, function(){
        $(this).css("background", "initial");
    });

    //Change language
    $("#switch_lang").click(function(e){
        $('[lang="fr"]').toggleClass("out");
        $('[lang="en"]').toggleClass("out");
        clock();
    });

    //Play sound on double click
    $(document).dblclick(function(){
        clearTimeout(timer);
        prevent=true;
        audiodbclick.currentTime=0;
        audiodbclick.play();
    });
    
    //Play sound on left click
    $(document).click(function(e){
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
    $(document).contextmenu(function(e){
        audioclick.currentTime=0;
        audioclick.play();
    });

    //Play sound on keypress
    $(document).keyup(function(e){
        randomKeyboardSound();
    });

    //Show text when hovering mascot
    $(document).on("mouseover", "#screen_toggle", function(e){
        const mascot_quotes=[
            "Je ne suis pas un punching ball", "Ah d'accord on en est là.", "Vous n'en avez pas marre ?", 
            "BRAVO ! Très mature, vraiment.", "Ben bien sûr, toujours plus.", "Bon, il serait peut-être temps d'arrêter non ?", 
            "...zZzZzZ", "Je vais finir par m'énerver.", "A qui vais-je faire croire ça, je ne suis qu'un tas de 14400 pixels.",
            "Vous êtes en train de vous demander combien de phrases je peux réciter ?", "Vous n'êtes pas au bout de vos surprises.",
            "Vous savez, on peut jouer à ce jeu encore trèèèèès longtemps.", "Entre deux patates, pensez à envoyer un mail au créateur du site si vous êtes recruteur.",
            "C'est l'histoire d'un type qui avait cassé sa souris à force de cliquer ici.", "Vous me frappez pour la " + punchcount + " fois",
            "Et pourtant, vous continuez. Faudrait se poser des questions.", "Si seulement je n'étais pas un écran dans un écran, je ...",
            "Je vous le dit, je n'aura pas hésite une seule seconde à ...", "Ouaip, c'est ça que je vous ferais.", "Ouaip", 
            "Bon, on a peut-être fait le tour de la question là non ?", "Je ne suis pas un punching ball", "Vous pensiez que je n'avais plus de phrases en stock ?",
            "Grossière erreur très cher", punchcount + " coups plus tard, toujours debout.", "Je ressens la douleur vous savez ?",
            "La douleur de constater qu'il aura fallu 800 millions d'années d'évolution pour que vous soyez là derrière votre écran à cliquer frénétiquement sur ce bouton.",
            "Vous êtes en plein dans l'engagement, vous vous dites \"après tous ces clics, j'aimerai quand même voir la fin\".",
            "Et s'il n'y avait pas de fin, on fait comment ?", "Vous et moi, vos clics, mes messages, jusqu'à la fin des temps.",
            "Le fait est que passer le reste de ma vie numérique avec un fou des claques ne me plait guère."
        ];
        if($("#screen_toggle p").length<1){
            $("#screen_toggle").append("<p>" + mascot_quotes[punchcount] + "</p>");
            $("#screen_toggle p").css({
                "position":"absolute",
                "top":"0",
                "right":"0",
                "transform":"translate(115%,-50%)",
                "max-width":"175px",
                "background": "rgba(0,0,0,0.9)",
                "padding":"5px 15x",
                "border-radius":"5px"
            })
        }
    });
    $(document).on("mouseleave", "#screen_toggle", function(e){
        $("#screen_toggle p").remove();
    });
});