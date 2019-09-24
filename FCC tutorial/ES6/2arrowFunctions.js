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


//4.  solution 1 (using parseInt on line )
/*
arrow functions work well with higher order functions..
Use arrow function syntax to compute the square of only 
the positive integers (decimal numbers are not integers) 
in the array realNumberArrayand store the new array in the 
variable squaredIntegers
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

//4. solution 2 (using Number.isInteger on line  71)
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line

  const squaredIntegers = arr.filter(
    (elem) => {
         return elem > 0 && Number.isInteger(elem);
    }).map(
      (num) => {
         return  num * num;
    });
  
  console.log(squaredIntegers);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); 


//5.

//6.

//7.