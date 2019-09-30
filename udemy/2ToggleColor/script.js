const button = document.querySelector("button");
const text = document.querySelector("p");
let isWhite = true;
let isArial = true;
button.addEventListener("click", function() {
    document.body.classList.toggle("silver");
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