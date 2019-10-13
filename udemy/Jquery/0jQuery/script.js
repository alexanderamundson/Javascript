const element = $("header")[0];
const div1 = $('#div1');
const div2 = $('#div2');
const div3 = $('#div3');
const button1 = $('#button1');
const button2 = $('#button2');


element.addEventListener("click", function(){
    $("header").css("background", "silver");
});

element.addEventListener("mouseover", function(){
    $("header").css("fontSize", "45px");
    $("header").text("Click ME");
});

button1.click(function() {
    alert("clicked button 1");
    div1.css(
        {"background": "gray",
         "fontSize":   "1.5em",
         "color": "blue"
        });
});


button2.dblclick( function() {
    alert("clicked button 2");
    $(this).css("width", "180px");
    $(this).css("border: 5px solid green");
});

