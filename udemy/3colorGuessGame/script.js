let colors = generateRandomColors(6);
const squares = document.querySelectorAll(".square");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
let colorDisplay = document.getElementById("colorDisplay");
let winningColor = pickColor();
colorDisplay.textContent = winningColor;


for (let i=0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //compare clicked square color to target color
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === winningColor) {
            h1.style.backgroundColor = clickedColor;
            changeAllColors(winningColor);
            messageDisplay.textContent = "Correct!";
            resetButton.innerHTML = "Play again";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

resetButton.addEventListener("click", function(){
    //reset all colors
    colors = generateRandomColors(6);
    winningColor = pickColor();
    colorDisplay.textContent = winningColor;
    messageDisplay.textContent = "";
    
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});


function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeAllColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function generateRandomColors(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
};

function randomColor() {
    //pick red, green, and blue from 0 -255
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")"; 
    //^^^must include spaces after commas or will cause compare problem on ln 17  
}; 








