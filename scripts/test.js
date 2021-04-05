$(function(){
    $.get('/theo.petropoulos/test.php', function(data){
        console.log(data);
    }, 'json');
});