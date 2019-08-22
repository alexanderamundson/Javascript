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
*/