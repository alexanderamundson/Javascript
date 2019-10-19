//1.
//Write a recursive function, sum(arr, n), that returns 
//the sum of the array's elements from index 0 to index n inclusive 
function sum(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return sum(arr, n - 1) + arr[n];
    }
  }  
console.log( sum([1], 0) );// should equal 1.
console.log( sum([2, 3, 4], 1) );// should equal 5.
console.log( sum([2, 3, 4], 2) );// should equal 9.


//2.
/*
The function should return an array of integers which begins with a number 
represented by the startNum parameter and ends with a number represented
by the endNum parameter. The starting number will always be less than or
equal to the ending number.
*/
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
      return [startNum];
    }
    let nums = rangeOfNumbers(startNum, endNum - 1);
    nums.push(endNum);
    return nums;
};
rangeOfNumbers(1, 5);// should return [1, 2, 3, 4, 5].
rangeOfNumbers(6, 9);// should return [6, 7, 8, 9].
rangeOfNumbers(4, 4);// should should return [4].


//3.
/*
Append the numbers n through 1 based on the n parameter to myArray.
For example, calling this function with n = 5 will pad the array 
with the numbers [5, 4, 3, 2, 1] inside of it.
*/
function countdown(myArray, n){
    //base case 
    if (n < 0) {
      return [];
    } else if (n === 1) {
      myArray.push(n);
      return myArray;
    }  
    myArray.push(n);
    //recursive step
    myArray = countdown(myArray, n - 1);
    return myArray;
}
  
