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