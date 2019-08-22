//1.
/*
ES6 introduces default parameters for functions.
The default parameter is used when the argument is not specified (it is undefined)
*/ 
const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {//value = 1 by default
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6

//2.
/*
ES6 introduces the rest operator for function parameters.
With the rest operator, you can create functions that
take a variable number of arguments. These arguments are
stored in an array that can be accessed later from 
inside the function.
*/
const sum = (function() {
    "use strict";
    return function sum(...args) {//args is an array that can be of any size
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // should be 6
  console.log(sum(1,2, 3, 4) );//should be 10
  console.log(sum(1,2, 3, 4, 5) );//should be 15