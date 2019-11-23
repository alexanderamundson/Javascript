//smallestCommons(arr) takes in an array of two numbers as an argument.
//This method returns the smallest common multiple 
//of the two numbers AND all the numbers in between the two numbers

/*Example: if arr is [1, 5], then smallestCommons(arr) 
returns the smallest number that is a multiple of 
1 and 2 and 3 and 4 and 5
*/

function smallestCommons(arr) {
    //returns an array of arr[0], arr[1], and all numbers between them
    function getAllNumbers(arr) {
      let largerNumber = Math.max(arr[0], arr[1]);
      let smallerNumber = Math.min(arr[0], arr[1]);
      let range = [];
      for (let i = smallerNumber; i <= largerNumber; i++) {
        range.push(i);
      }
      return range;
    }
    //returns whether 'multiple' is a common multiple of all elements in 'array'
    function isCommonMultiple(array, multiple) {
     let min = array[0];
     let max = array[array.length -1];
     for (let i = 0; i < array.length; i++) {
         console.log(i);
         if (multiple % array[i] !== 0) {
             return false;
         }
     }
     return true;
    }
    
    let rangeOfNumbers = getAllNumbers(arr);
    let counter =  Math.max(arr[0], arr[1]);
    let smallestCommonMultiple = counter;
    while (!isCommonMultiple(rangeOfNumbers, smallestCommonMultiple)) {
      smallestCommonMultiple += counter;
      
    }
    return smallestCommonMultiple;
}

smallestCommons([1, 5]);// should return 60.
smallestCommons([5, 1]);// should return 60.
smallestCommons([2, 10]);// should return 2520.
smallestCommons([1, 13]);// should return 360360.