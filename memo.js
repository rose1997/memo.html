$('#submitform').on('click','.del_line', function(){
  if($('.del_line').prop('checked')){
    $(this).parents('p').css('text-decoration', 'line-through');
  }
  else{
    $(this).parents('p').css('text-decoration', 'none');
  }
});

/*$(document).ready(function(){
  $("del_line").click(function(){
    $("#text").css("text-decoration", "line-through");
  });
});*/

$('#submitform').on('click', '.del', function(){
  $(this).parents('p').remove();
});
/*$(document).ready(function(){
  $("del").click(function(){
    $("#note").remove();
  });
});*/

$(".add_note").keypress(function(e){
  code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13){
 $('<p><input class="del_line" type="checkbox"><a id=text>'+$('.add_note').val()+'</a> &nbsp;<button class="del">X</button></p>').appendTo('#text');


 $('input[class="add_note"]').val("");
  }
});