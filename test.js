$(function(){
  $('#clickme').click(function(e){
    e.preventDefault();
    $.get('testreq.php', function(data, status){
      var test=JSON.parse(data);
      $(test).each(function(index,value){
        console.log(value);
      });
      }
    );
  })
});