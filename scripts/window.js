$(function(){
    $(".window_close").click(function(e){
        e.preventDefault();
        let window_id="#" + $(e.target).parents(".window").attr('id');
        let id=window_id.replace("#window_", "");
        $(window_id).toggleClass("visible invisible");
        $("#tb_" + id).remove();
    });
});