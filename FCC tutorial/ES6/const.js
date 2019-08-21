function printManyTimes(str) {
    "use strict";
  
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
  
  }
  printManyTimes("freeCodeCamp");

  /*
  variables declared using const are read-only. 
  They are a constant value, which means that once a variable 
  is assigned with const, it cannot be reassigned.
  */