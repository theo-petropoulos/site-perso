$(function(){
    const audiobuzz= new Audio('assets/audio/sounds/buzz.mp3');
    const audiobip= new Audio('assets/audio/sounds/bip.mp3');
    const audioclick= new Audio('assets/audio/sounds/click.mp3');
    const audiodbclick= new Audio('assets/audio/sounds/dbclick.mp3');
    const punchscreen= new Audio('assets/audio/sounds/punch.mp3');
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

    //Used to stop effects
    let effects = 1;

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
        setTimeout(() => {$("#music_player").toggleClass("invisible");}, 3300);
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
});