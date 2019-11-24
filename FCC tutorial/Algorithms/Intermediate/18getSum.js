function addTogether(...args) {
    const addNumber = (number) => {
      return isNumber(number) ? args[0] + number : undefined;
    }
    const isNumber = (value) => typeof value === "number";
    
    var firstParam = args[0];
    var secondParam = args[1];//will be undefined if only 1 parameter is passed to function
    if (args.length > 1 ) {
       if (!isNumber(firstParam) || !isNumber(secondParam)) { 
         return undefined;
       }  
       return args[0] + args[1];
    }    
    return isNumber(firstParam) ? addNumber : undefined;
    
}
  
addTogether(2,3); //should return 5
addTogether(8)(2); //should return 10
  


/*
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, 
and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/