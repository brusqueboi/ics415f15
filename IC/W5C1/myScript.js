
$(document).ready(function(){
  $("h1").click(function(){
    $("h1").click();
  });
  $("p").mouseenter(function(){
    $("p").css("background-color", "yellow");
  });
  $("p").mouseleave(function(){
    $("p").css("background-color", "lightgray");
  });
  $("#btn1").click(function(){
    $("p").mouseenter();
  });
  $("#btn2").click(function(){
    $("p").mouseleave();
  });
});
