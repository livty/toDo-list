//Check of specific tods by clicking
$("ul").on("click", "li", function(){
  //if li is gray
  $(this).toggleClass("completed");
});
//click on x to delete ToDo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
  if(event.which=== 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-cc-visa' aria-hidden='true'></i></span> " + todoText + "</li>")
  }
});
$(".fa-bath").click(function(){
  $("input[type='text']").fadeToggle();
});
