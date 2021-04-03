$(function(){
    //Display time and date
    clock();
});

//Display time and date
function clock(){
    var date=new Date();
    var h=date.getHours();
    if(h<10) h= '0' + h;
    var t=date.getMinutes();
    if(t<10) t= '0' + t;
    var d=date.getDate();
    if(d<10) d= '0' + d;
    var m=date.getMonth() + 1;
    if(m<10) m = '0' + m;
    var y=date.getFullYear();

    $("#task_corner").html("<p>" + h + ":" + t + "</p><p>" + d + "/" + "/" + m + "/" + y + "</p>");
    setTimeout(clock, 30000);
}