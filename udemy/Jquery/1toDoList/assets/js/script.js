//let a= document.querySelector("");
//let b = document.getElementById("");

//line-thru completed tasks
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//delete task
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();//'this' is the span's parent element
    });
    event.stopPropagation();//stops event bubbling
});


//Add new tasks
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        let newTask = $(this).val();
        $("ul").append(`<li><span>X</span> ${newTask}</li>`);
        $(this).val("");
    }
    
});