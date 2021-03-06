let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
const squares = document.querySelectorAll(".square");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
let colorDisplay = document.getElementById("colorDisplay");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
let ball = document.getElementById('ball');
let time = 1;
let winningColor = pickColor();
colorDisplay.textContent = winningColor;

initialize();

function initialize() {
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
                resetButton.innerHTML = "Play again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}
resetButton.addEventListener("click", function(){
    resetSquares();
});

easyBtn.addEventListener("click", function(){
   generateEasyGame();
});

hardBtn.addEventListener("click", function(){
    generateHardGame();
});


function resetSquares() {
    colors = generateRandomColors(numOfSquares);
    winningColor = pickColor();
    colorDisplay.textContent = winningColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
};


function generateEasyGame() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    winningColor = pickColor();
    colorDisplay.textContent = winningColor;
    h1.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }  
};

function generateHardGame() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    winningColor = pickColor();
    colorDisplay.textContent = winningColor;
    h1.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";    
    for(let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }

}


function generateRandomColors(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
};

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeAllColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function randomColor() {
    //pick red, green, and blue from 0 -255
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")"; 
    //^^^must include spaces after commas or
    // will cause compare problem on ln 23  
}; 




function ani(){
    ball.classList.toggle("ball");
    (time % 2 === 0) ? ball.innerText = "Click to activate me" : ball.innerText = "Click to stop me!";
    time++;
}