//1.

/*
  variables declared using const are read-only. 
  They are a constant value, which means that once a variable 
  is assigned with const, it cannot be reassigned.
  */

function printManyTimes(str) {
    "use strict";
  
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
  
  }
  printManyTimes("freeCodeCamp");


  //2.

  /*
  objects (including arrays and functions) assigned to a 
  variable using const are still mutable. Using the const 
  declaration only prevents reassignment of the variable identifier.
  */

 const s = [5, 7, 2];
 function editInPlace() {
   "use strict";
   // s = [2, 5, 7]; <- this is invalid
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
   
 }
 editInPlace();