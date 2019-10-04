const element = $("header")[0];


element.addEventListener("click", function(){
    $("header").css("background", "silver");
    $("header").html(`<div>this  ${this} is a div</div>`);
});

element.addEventListener("mouseover", function(){
    $("header").css("fontSize", "45px");
});