$(function(){
    const audiobuzz= new Audio('assets/audio/sounds/buzz.mp3');
    const audiobip= new Audio('assets/audio/sounds/bip.mp3');
    const audioclick= new Audio('assets/audio/sounds/click.mp3');
    const audiodbclick= new Audio('assets/audio/sounds/dbclick.mp3');
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
    
    clock();
    
    $(document).on('click', "#switch_power", function(e){
        e.preventDefault();
        $("#screen_off").toggleClass("invisible visible");
        $("#screen_on").toggleClass("visible invisible");
        $("#screen_on").css("background-image", "radial-gradient(circle, rgba(40,57,20,0.95) 0%, rgba(20,29,9,0.97) 80%, rgba(0,0,0,0.99) 100%), url('assets/images/backgrounds/bg_stripes.jpg')");
        setTimeout(() => {$("title").html("Bonjour, Monde.")}, 1850);
        setTimeout(() => {$("#linkicon").html('<link id="linkicon" rel="icon" type="image/png" href="assets/images/icons/logo2.png">')}, 2250);
        setTimeout(() => {$("#task_bar").toggleClass("visible invisible");}, 2500);
        setTimeout(() => {$("#user").toggleClass("invisible");screen_flick();}, 3000);
        setTimeout(() => {$("#music_player").toggleClass("invisible");}, 3300);
        setTimeout(() => {$("#folder_section").toggleClass("visible invisible");}, 3500);
        for(let i=1;i<5;i++) setTimeout(() => {
            $("#user .user"+i).toggleClass("invisible");
            audiobip.currentTime=0;
            audiobip.play();}, 3500+i*250);
        $(this).css('display', 'none');
        });

    //Power off
    $("#shutdown").click(function(e){
        $("#folder_section").toggleClass("visible invisible");
        setTimeout(() => {$("#music_player").toggleClass("invisible");}, 300);
        setTimeout(() => {$("#screen_on").toggleClass("invisible visible");}, +00);
        setTimeout(() => {
            $("#user").toggleClass("invisible");screen_flick();
            for(let i=1;i<5;i++) $("#user .user"+i).toggleClass("invisible");
        }, 1100);
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