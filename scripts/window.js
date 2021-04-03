$(function(){
    $(".window_close").click(function(e){
        e.preventDefault();
        let window_id="#" + $(e.target).parents(".window").attr('id');
        $(window_id).toggleClass("visible invisible");
    });
});