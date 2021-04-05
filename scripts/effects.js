$(function(){
    const audiobuzz= new Audio('/theo.petropoulos/assets/audio/sounds/buzz.mp3');
    const audiobip= new Audio('/theo.petropoulos/assets/audio/sounds/bip.mp3');
    const audioclick= new Audio('/theo.petropoulos/assets/audio/sounds/click.mp3');
    const audiodbclick= new Audio('/theo.petropoulos/assets/audio/sounds/dbclick.mp3');
    $("title").append("No signal");
    $('[lang="en"]').toggleClass("out");
    //Used to trigger dblclick event vs simple click
    var prevent = false;
    var timer = 0;
    
    clock();
    
    $("#switch_power").click(function(e){
        e.preventDefault();
        audiobuzz.play();
        $("#screen_off").toggleClass("invisible visible");
        $("#screen_on").toggleClass("visible invisible");
        $("#screen_on").css("background-image", "radial-gradient(circle, rgba(40,57,20,0.95) 0%, rgba(20,29,9,0.97) 80%, rgba(0,0,0,0.99) 100%), url('/theo.petropoulos/assets/images/bg_stripes.jpg')");
        setTimeout(() => {$("title").empty().append("Bonjour, Monde.")}, 1850);
        setTimeout(() => {$("#task_bar").toggleClass("visible invisible");}, 2500);
        setTimeout(() => {$("#user").toggleClass("invisible");screen_flick();}, 3000);
        setTimeout(() => {$("#music_player").toggleClass("invisible");}, 3300);
        setTimeout(() => {$("#folder_section").toggleClass("visible invisible");}, 3500);
        for(let i=1;i<5;i++) setTimeout(() => {
            $("#user .user"+i).toggleClass("invisible");
            audiobip.currentTime=0;
            audiobip.play();}, 3500+i*250);
        $(this).css("display", "none");
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
            }, 200);
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

function screen_flick(){
    var flick=Math.floor(Math.random()*8)+1;
    var audioflick= new Audio('/theo.petropoulos/assets/audio/sounds/flick.mp3');
    var audiobuzz= new Audio('/theo.petropoulos/assets/audio/sounds/buzz.mp3');
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
            setTimeout(()=>{$("#screen_flicker").css("transition", "all 2s");$("#screen_flicker").toggleClass("invisible visible");audiobuzz.currentTime = 0;audiobuzz.play();}, 2200);
            break;
        default:
            break;
    }
    setTimeout(screen_flick, 8500);
}

function randomKeyboardSound(){
    let i=Math.floor(Math.random()*5)+1;
    let audiokeyboard=new Audio('/theo.petropoulos/assets/audio/sounds/keyb' + i + '.mp3');
    audiokeyboard.play();
}