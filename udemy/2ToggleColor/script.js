const button = document.querySelector("button");
const text = document.querySelector("p");
let isWhite = true;
let isArial = true;
button.addEventListener("click", function() {
    if (isWhite) {
       document.body.style.background = "silver";
       
    } else {
        document.body.style.background = "white";
    } 
    isWhite = !isWhite;
});

text.addEventListener("click", function() {
    if (isArial) {
       text.style.fontFamily = "Georgia";
       text.style.fontSize = "3em";
       
    } else {
        text.style.fontFamily = "Arial";
        text.style.fontSize = "2em";
        text.style.fontWeight = "700";
    } 
    isArial = !isArial;
});