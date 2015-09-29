
$(document).on("click", "#mmo",function(){
  $("#mmo_show").show(1000);
});
$(document).on("click", "#mmo_show", function(){
  $("#mmo_show").hide(1000);
});
$(document).on("click", "#dlc",function(){
  $("#dlc_show").show(1000);
});
$(document).on("click", "#dlc_show", function(){
  $("#dlc_show").hide(1000);
})
$(document).on("click", "#character",function(){
  $("#character_show").show(1000);
});
$(document).on("click", "#character_show", function(){
  $("#character_show").hide(1000);
});
$(document).on("click", "#lvl",function(){
  $("#lvl_show").show(1000);
});
$(document).on("click", "#lvl_show", function(){
  $("#lvl_show").hide(1000);
});
$(document).on("click", "#raids",function(){
  $("#raids_show").show(1000);
});
$(document).on("click", "#raids_show", function(){
  $("#raids_show").hide(1000);
});

function getlinks( ){
  var num = document.getElementsByTagName('a');
  document.getElementById("num_form").innerHTML = num.length;
}