$(function(){
    // $.get('test.php', function(data){
    //     console.log(data);
    //     $.each(data, function(){
    //         console.log(data);
    //         console.log('test');
    //     });
    // }, 'json');
    $.ajax({
        type: "GET",
        url: "test.php",
        success : function(data){
            console.log(data);
        }
      })
        .done(function(e){
          alert( "Done : " + e );
        });
});