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


 //3.

 /*
 JavaScript provides a function Object.freeze to prevent data mutation of objects.
Once the object is frozen, you can no longer add, update, or delete 
properties from it. Any attempt at changing the object will be rejected without an error
 */

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);