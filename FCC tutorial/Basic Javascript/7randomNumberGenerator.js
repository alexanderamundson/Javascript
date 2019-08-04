//returns a random fraction
function randomFraction() {
  return Math.random();
}


//returns random whole number (0 - 9)
function randomFraction() {
  return Math.floor(Math.random());
}


//Returns a number between myMin and MyMax inclusive
function randomRange(myMin, myMax) {
  return(  Math.floor(Math.random() * (myMax -myMin+ 1)) + myMin   ); 
}
var myRandom = randomRange(5, 15);


//parses string to decimal number
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");


//////////////////////////////////////////////
//converts to integer with given radix
function convertToInteger(str) {
  parseInt(str, 2);//converts to binary (base 2)
}
convertToInteger("10011");



