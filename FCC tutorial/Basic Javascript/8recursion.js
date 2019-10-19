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