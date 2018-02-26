$(document).ready(function(){
 $(".on").click(function(){
    $(".row").children(".circle").addClass("blue");
    $(".square1").addClass("red");
    $(".square2").addClass("red");
    $(".square3").addClass("red");
    $(".square4").addClass("red");
    $(".row").children(".diamond").addClass("green");
    });
 $(".off").click(function(){
    $(".row ").children(".circle").removeClass("blue");
    $(".square1").removeClass("red");
    $(".square2").removeClass("red");
    $(".square3").removeClass("red");
    $(".square4").removeClass("red");
    $(".row").children(".diamond").removeClass("green");
    });
 
 $(".circle").click(function(){ 
 	$(this).toggleClass("blue");});
 
 $(".square1").click(function(){ 
 	$(this).toggleClass("red");});

 $(".square1").click(function(){ 
 	$(".row1").toggleClass("red");});
 
 $(".square1").click(function(){
 	$(".col1").toggleClass("red");}); 

$(".square2").click(function(){ 
 	$(this).toggleClass("red");});

 $(".square2").click(function(){ 
 	$(".row2").toggleClass("red");});
 
 $(".square2").click(function(){
 	$(".col2").toggleClass("red");}); 

 $(".square3").click(function(){ 
 	$(this).toggleClass("red");});

 $(".square3").click(function(){ 
 	$(".row4").toggleClass("red");});
 
 $(".square3").click(function(){
 	$(".col4").toggleClass("red");}); 

 $(".square4").click(function(){ 
 	$(this).toggleClass("red");});

 $(".square4").click(function(){ 
 	$(".row5").toggleClass("red");});
 
 $(".square4").click(function(){
 	$(".col5").toggleClass("red");}); 

 $(".diamond").click(function(){
 	$(".row3").toggleClass("green");});

 $(".diamond").click(function(){
 	$(".col3").toggleClass("green");});

$(".diamond").click(function(){
 	$(this).toggleClass("green");});
 
});