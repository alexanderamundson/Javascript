//Return an array consisting of the largest number 
//from each provided sub-array. For simplicity, the 
//provided array will contain exactly 4 sub-arrays.

//Method 1: for loops
function largestOfFour(arr) {
  var largest = [0, 0, 0, 0];
  for (var r=0; r < arr.length; r++) {
     largest[r] = arr[r][0];
    for (var c=0; c<arr[r].length; c++) {
      if (arr[r][c] > largest[r]) {
        largest[r] = arr[r][c];
      }
    }
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Method 2: map method and apply Math.max
function largestOfFour(arr) {
    return arr.map(function (index) {
      return Math.max.apply(null, index);
    } );
}


