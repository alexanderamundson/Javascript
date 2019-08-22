//1.
/*
you can use arrow function syntax to write 
anonymous functions in ES6:

const myFunc = () => { ... }
*/
//Before ES6:
var magic = function() {
    "use strict";
    return new Date();
};
//using ES6 arrow functions:
const magic = () => {
    "use strict";
    return new Date();
};

//2.
/*
When there is no function body, and only a return value, 
arrow function syntax allows you to omit the keyword 
return as well as the brackets surrounding the code.
*/
const getValue = () => "value";

//3.
/*
like other functions, arrow functions can receive arguments
*/
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};  
console.log(myConcat([1, 2], [3, 4, 5]));
//displays 1,2,3,4,5


//4.
/*
arrow functions work well with higher order functions
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  
  const squaredIntegers = arr
   .filter(
       (elem) =>  elem % parseInt(elem) === 0 && elem > 0)
   .map(
       (element) => element * element  ); 
  
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


//5.
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

//6.
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