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
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);// returns [5, 27, 39, 1001]


//Method 2: Array sort method
function largestOfFour(arr) {
  let maxArray = [];
  //loop through the array
    for (let i=0; i<arr.length; i++) {
    //call Array.prototype.sort on each sub-array
    arr[i].sort(function(elem1, elem2){
       return elem2 - elem1;//sorts array descending
    });
    //push larget number in each subarray into maxArray
    maxArray.push(arr[i][0]);
    }
  return maxArray;
}
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);// should return [25, 48, 21, -3]



//Method 3: map method and apply Math.max
function largestOfFour(arr) {
    return arr.map(function (index) {
      return Math.max.apply(null, index);
    } );
}


