$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");    
});

//click on x to delete todo
$("ul").on("click", "span" ,function(event){

    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //since clicking on span was under li->ul->container->body
    //so the function was applied on all this instead of just span
    event.stopPropagation();
});

$(".entertodo").keypress(function(event){
    if(event.which===13){
        //grabbing new todo
        var todoText=($(this).val());
        //input k box ko phir se empty karne k liye
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>  "+todoText+"</li>");
    }
});
$(".fa-plus").click(function(){
    $("input").fadeToggle(300);
});
// $(".fa-trash").click(function(){
//     $("ul").remove();
// });