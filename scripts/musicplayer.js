$(function(){
    //Auto fetch musics from folder
    var musList=[];
    $.get('php/playlist.php', function(data, status){
        if(status=='success'){
            let playlist=JSON.parse(data);
            let j=0;
            $(playlist).each(function(index, name){
                let path="assets/audio/musics/" + name;
                musList[j]= new Audio(path);
                j++;
            });

            //Rest of the script is executed in case of success    
            let k;
            let mus;
            var title;

            //Init the volume
            let volume = document.querySelector("#music_volume");

            //Init the music
            if(typeof(k)=='undefined'){
                k=3;
                mus=musList[k];
                title=$(mus).attr('src').replace('assets/audio/musics/', '');
                mus.volume=volume.value/100;
            }

            //Listen to volume change
            volume.addEventListener("change", function(e) {
                mus.volume = e.currentTarget.value / 100;
            });

            //Play next music when the previous one ended
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
                    $(musList).each(function(index, data){
                        if(mus==data){
                            if(index==0) k=musList.length-1;
                            else k=index - 1;
                        }
                    });
                }
                musList[k].volume=mus.volume;
                mus=musList[k];
                title=$(mus).attr('src').replace('assets/audio/musics/', '');
                $("#music_title p").html(title);
                mus.addEventListener("ended", function(){
                    $("#music_next").trigger("click");
                });
            });

            //On next button' click
            $("#music_next").click(function(e){
                e.preventDefault();
                mus.pause();
                mus.currentTime=0;
                $(musList).each(function(index, data){
                    if(mus==data){
                        if(index==musList.length-1) k=0;
                        else k=index + 1;
                    }
                });
                musList[k].volume=mus.volume;
                mus=musList[k];
                title=$(mus).attr('src').replace('assets/audio/musics/', '');
                $("#music_title p").html(title);
                $("#music_play").html('<i class="fas fa-pause"></i>');
                mus.play();
                mus.addEventListener("ended", function(){
                    $("#music_next").trigger("click");
                });
            });
        }
        else alert('Error: Could not load songs.');
    });  
});