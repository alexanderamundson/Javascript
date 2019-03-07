//Use a for loop to work to push the values 1 through 5 onto myArray.

var myArray = [];
var thisArray = [ 2, 3, 4, 5, 6];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

//Use a for loop to fill thisArray the odd values from 1 through 9

var thisArray = [];
for (var i=0; i < 10; i++) {
  if ((i % 2) != 0) {
    myArray.push(i);
  }
}

//Push the odd numbers from 9 through 1 to myArray using a for loop

for (var i = 9 ; i > 0 ; i-=2) {
   myArray.push(i);
}

//Declare and initialize a variable total to 0. 
//Use a for loop to add the value of each element 
//of the thisArray array to total

var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += thisArr[i];
}


//Write function multiplyAll so that it multiplies the product 
//variable by each number in the sub-arrays of function parameter arr

function multiplyAll(arr) {
  var product = 1;
  
  for (var r =0; r < arr.length; r++) {
    for (var c=0; c < arr[r].length; c++) {
      product *= arr[r][c];
    }
  }
  
  return product;
}


multiplyAll([[1],[2],[3]]);//returns 6
multiplyAll([[1,2],[3,4],[5,6,7]]);//returns 5040
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])//returns 54