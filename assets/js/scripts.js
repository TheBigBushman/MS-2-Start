$( document ).ready(function() {
    console.log( "ready! 1234" );
});

$(".flightandhotel").mouseenter(function(){
    $("p").css("background-color", "blue");
});
$(".flightandhotel").mouseleave(function(){
    $("p").css("background-color", "white");
});