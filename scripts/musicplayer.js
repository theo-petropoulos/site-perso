$(function(){
    //Fetch musics, should be done dynamically via node.js file explorer
    var musList=[];
    musList[1]= new Audio('/theo.petropoulos/assets/sounds/Blue Stahli - Command Line Kill.mp3');
    musList[2]= new Audio('/theo.petropoulos/assets/sounds/Carpenter Brut - Turbo Killer.mp3');
    musList[3]= new Audio('/theo.petropoulos/assets/sounds/Scandroid - Neo-Tokyo.mp3');
    let k;
    let mus;
    var title;

    //Init the volume
    let volume = document.querySelector("#music_volume");

    //Init the music
    if(typeof(k)=='undefined'){
        k=1;
        mus=musList[k];
        title=$(mus).attr('src').replace('/theo.petropoulos/assets/sounds/', '');
        mus.volume=volume.value/100;
    }

    //Listen to volume change
    volume.addEventListener("change", function(e) {
        mus.volume = e.currentTarget.value / 100;
    });

    mus.addEventListener("ended", function(){
        $("#music_next").trigger("click");
    });

    //Init the title
    $("#music_title").html('<p class="distorted" style="pointer-events:none">' + title + '</p>' 
    + '<p class="distorted" style="pointer-events:none">' + title + '</p>');
    
    //On play button' click
    $("#music_play").click(function(e){
        e.preventDefault();
        mus=musList[k];
        if(mus.paused){
            mus.play();
            $("#music_play").html('<i class="fas fa-pause"></i>');
        } else{
            mus.pause();
            $("#music_play").html('<i class="fas fa-play"></i>');
        }
    });

    //On prev button' click
    $("#music_prev").click(function(e){
        e.preventDefault();
        mus.pause();
        $("#music_play").html('<i class="fas fa-play"></i>');
        if(mus.currentTime>5){
            mus.currentTime=0;
        } else{
            mus.currentTime=0;
            for(let i=1;i<4;i++){
                if(mus==musList[i]){
                    if(i!==1) k=i-1;
                    else k=3;
                }
            }
        }
        musList[k].volume=mus.volume;
        mus=musList[k];
        title=$(mus).attr('src').replace('/theo.petropoulos/assets/sounds/', '');
        $("#music_title p").html(title);
    });

    //On next button' click
    $("#music_next").click(function(e){
        e.preventDefault();
        mus.pause();
        mus.currentTime=0;
        for(let i=1;i<4;i++){
            if(mus==musList[i]){
                if(i!==3) k=i+1;
                else k=1;
            }
        }
        musList[k].volume=mus.volume;
        mus=musList[k];
        title=$(mus).attr('src').replace('/theo.petropoulos/assets/sounds/', '');
        $("#music_title p").html(title);
        $("#music_play").html('<i class="fas fa-pause"></i>');
        mus.play();
    });
});