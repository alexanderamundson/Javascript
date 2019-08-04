//Returns a number between myMin and MyMax inclusive
function randomRange(myMin, myMax) {

  return(  Math.floor(Math.random() * (myMax -myMin+ 1)) + myMin   ); 

}

var myRandom = randomRange(5, 15);